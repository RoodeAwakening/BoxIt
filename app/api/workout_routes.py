from flask import Blueprint, jsonify, request
from app.models import Stock_Workout, User_Workout, db, User
from flask_login import login_required, current_user


workout_routes = Blueprint('workouts', __name__)

# All stock workouts


@workout_routes.route('/', methods=['GET'])
# @login_required
def stock_workouts():
    stock_workouts = Stock_Workout.query.all()
    return {"stock_workouts": [stock_workout.to_dict() for stock_workout in stock_workouts]}


@workout_routes.route('/<int:id>', methods=['GET'])
# @login_required
def stock_workouts_individual(id):
    workouts = Stock_Workout.query.get(id)
    return jsonify(workouts.to_dict())


# User workouts
@workout_routes.route('/user_workouts', methods=['GET', 'POST'])
# @login_required
def user_workouts():
    method = request.method
    if method == 'GET':
        # Get a users workout
        user_workouts = User_Workout.query.filter(
            User_Workout.user_id == current_user.id)
        return {"user_workouts": [user_workout.to_dict() for user_workout in user_workouts]}
    elif method == 'POST':
        new_workout = request.json['workout']
        # REPLACE WITH current_user.id
        workout = User_Workout(user_id=current_user.id, stock_workouts_id=new_workout['stock_workouts_id'],
                               favorited=new_workout['favorited'], progress_completed=new_workout['progress_completed'])
        db.session.add(workout)
        db.session.commit()
        return jsonify(workout.to_dict() if workout else 'No Workout Added')


@workout_routes.route('/user_workouts/completed', methods=['GET'])
# @login_required
def user_workouts_all():
    method = request.method
    if method == 'GET':
        workoutList = {}
        # Get all users workout
        # add column in user table to count workouts in the future!!!!
        allUsersWorkouts = db.session.query(User_Workout).filter(User_Workout.progress_completed == True).join(User).all()
        for workout in allUsersWorkouts:
            if workout.user_id not in workoutList:
                workoutList[workout.user_id] = 1
            else:
                workoutList[workout.user_id] += 1
        return {'workout_totals': workoutList}
        # return jsonify({'totals': workoutList.to_dict()})
        # return jsonify(workoutList_dict())
        # return {"users": [c.to_dict() for c in allUsersWorkouts]}
        # return {"all_user_workouts": [user_workout.to_dict() for user_workout in user_workouts]}


@workout_routes.route('/user_workouts/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def user_workouts_individual(id):
    method = request.method
    if method == 'GET':
        # Get individual user workout
        workout = User_Workout.query.get(id)
        return jsonify(workout.to_dict())
    elif method == 'PATCH':
        # update individual workout
        workout = User_Workout.query.get(id)
        if workout:
            update_favorited = request.json['favorited']
            workout.favorited = update_favorited
            db.session.commit()
        return jsonify(workout.to_dict() if workout else 'Workout Not Updated')
    elif method == 'DELETE':
      # Delete a workout form user workouts
        success = User_Workout.query.filter(User_Workout.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted' if success else 'No Group Exists')
