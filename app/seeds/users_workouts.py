from app.models import db, User_Workout


def seed_users_workouts():

    workout1 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout2 = User_Workout(user_id='1', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout3 = User_Workout(user_id='1', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout4 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)


    workout6 = User_Workout(user_id='2', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout7 = User_Workout(user_id='2', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout8 = User_Workout(user_id='2', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout9 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout10 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout11 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout12 = User_Workout(user_id='3', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout13 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout14 = User_Workout(user_id='3', stock_workouts_id='2', favorited=True, progress_completed=True)



    workouts = [workout1, workout2, workout3, workout4,  workout6, workout7, workout8, workout9, workout10, workout11, workout12, workout13, workout14, workout14]


    for workout in workouts:
        db.session.add(workout)


    db.session.commit()


def undo_users_workouts():
    db.session.execute('DROP TABLE users_workouts CASCADE;')
    db.session.commit()
