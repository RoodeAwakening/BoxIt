from app.models import db, User_Workout


def seed_users_workouts():

    workout1 = User_Workout(
        user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)

    db.session.add(workout1)
    db.session.commit()


def undo_users_workouts():
    db.session.execute('TRUNCATE users_workouts CASCADE;')
    db.session.commit()
