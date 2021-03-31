from app.models import db, Stock_Workout


def seed_stock_workouts():

    workout1 = Stock_Workout(coach_photo_url='https://boxit.s3.us-east-2.amazonaws.com/coaches/cisco.PNG',
                             audio_url='https://boxit.s3.us-east-2.amazonaws.com/workouts/workout1.mp3')
    workout2 = Stock_Workout(coach_photo_url='https://boxit.s3.us-east-2.amazonaws.com/coaches/mary.PNG',
                             audio_url='https://boxit.s3.us-east-2.amazonaws.com/workouts/workout2.mp3')

    workouts = [workout1, workout2]
    for workout in workouts:
        db.session.add(workout)

    db.session.commit()


def undo_stock_workouts():
    db.session.execute('TRUNCATE stock_workouts CASCADE;')
    db.session.commit()
