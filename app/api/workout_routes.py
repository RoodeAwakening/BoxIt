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
        users = User.query.with_entities(User.id, User.workouts_completed).order_by(User.workouts_completed.desc())
        return {"workoutsCompleted":[user for user in users]}


@workout_routes.route('/user_workouts/completed/user', methods=['GET','PATCH'])
# @login_required
def user_workouts_single():
    method = request.method
    if method == 'GET':
        # current_user.id
        users = User.query.with_entities(User.workouts_completed).filter(User.id == 3)
        return {"workoutsCompleted":[user for user in users]}
    if method == 'PATCH':
        id = 3
        user = User.query.get(id)
        if user:
            add_workout = request.json['new_workout']
            user.workouts_completed = add_workout
            db.session.commit()
        return jsonify(user.to_dict() if user else 'Invalid operation.')





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
