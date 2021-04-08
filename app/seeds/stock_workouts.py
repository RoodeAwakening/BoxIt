from app.models import db, Stock_Workout


def seed_stock_workouts():

    workout1 = Stock_Workout(coach_photo_url='https://boxit.s3.us-east-2.amazonaws.com/coaches/cisco.PNG',
                             audio_url='https://boxit.s3.us-east-2.amazonaws.com/workouts/Workout1-compressed.m4v')
    workout2 = Stock_Workout(coach_photo_url='https://boxit.s3.us-east-2.amazonaws.com/coaches/mary.PNG',
                             audio_url='https://boxit.s3.us-east-2.amazonaws.com/workouts/Workout2-compressed.m4v')
    workout3 = Stock_Workout(coach_photo_url='https://boxit.s3.us-east-2.amazonaws.com/coaches/cody.PNG',
                             audio_url='https://boxit.s3.us-east-2.amazonaws.com/workouts/Workout3-compressed.m4v')

    workouts = [workout1, workout2, workout3]
    for workout in workouts:
        db.session.add(workout)

    db.session.commit()


def undo_stock_workouts():
    db.session.execute('DROP TABLE stock_workouts CASCADE;')
    db.session.commit()
