from app.models import db, User_Workout


def seed_users_workouts():

    workout1 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout2 = User_Workout(user_id='1', stock_workouts_id='3', favorited=False, progress_completed=True)
    workout3 = User_Workout(user_id='1', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout4 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout5 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout6 = User_Workout(user_id='1', stock_workouts_id='3', favorited=False, progress_completed=True)
    workout7 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout8 = User_Workout(user_id='1', stock_workouts_id='1', favorited=False, progress_completed=True)
    workout9 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout10 = User_Workout(user_id='1', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout11 = User_Workout(user_id='1', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout12 = User_Workout(user_id='1', stock_workouts_id='1', favorited=True, progress_completed=True)

    workout13 = User_Workout(user_id='2', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout14 = User_Workout(user_id='2', stock_workouts_id='1', favorited=False, progress_completed=True)
    workout15 = User_Workout(user_id='2', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout16 = User_Workout(user_id='3', stock_workouts_id='1', favorited=False, progress_completed=True)
    workout17 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout18 = User_Workout(user_id='3', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout19 = User_Workout(user_id='3', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout20 = User_Workout(user_id='3', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout21 = User_Workout(user_id='3', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout22 = User_Workout(user_id='4', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout23 = User_Workout(user_id='4', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout24 = User_Workout(user_id='4', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout25 = User_Workout(user_id='4', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout26 = User_Workout(user_id='4', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout27 = User_Workout(user_id='4', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout28 = User_Workout(user_id='4', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout29 = User_Workout(user_id='4', stock_workouts_id='3', favorited=False, progress_completed=True)

    workout30 = User_Workout(user_id='5', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout31 = User_Workout(user_id='5', stock_workouts_id='3', favorited=True, progress_completed=True)

    workout32 = User_Workout(user_id='6', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout33 = User_Workout(user_id='6', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout34 = User_Workout(user_id='6', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout35 = User_Workout(user_id='6', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout36 = User_Workout(user_id='6', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout37 = User_Workout(user_id='6', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout38 = User_Workout(user_id='7', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout39 = User_Workout(user_id='7', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout40 = User_Workout(user_id='7', stock_workouts_id='1', favorited=False, progress_completed=True)
    workout41 = User_Workout(user_id='7', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout42 = User_Workout(user_id='7', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout43 = User_Workout(user_id='8', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout44 = User_Workout(user_id='8', stock_workouts_id='3', favorited=True, progress_completed=True)

    workout45 = User_Workout(user_id='9', stock_workouts_id='2', favorited=True, progress_completed=True)

    workout46 = User_Workout(user_id='10', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout47 = User_Workout(user_id='10', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout48 = User_Workout(user_id='10', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout49 = User_Workout(user_id='10', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout50 = User_Workout(user_id='10', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout51 = User_Workout(user_id='10', stock_workouts_id='1', favorited=True, progress_completed=True)
    workout52 = User_Workout(user_id='10', stock_workouts_id='2', favorited=False, progress_completed=True)

    workout53 = User_Workout(user_id='11', stock_workouts_id='2', favorited=False, progress_completed=True)
    workout54 = User_Workout(user_id='11', stock_workouts_id='3', favorited=True, progress_completed=True)
    workout55 = User_Workout(user_id='11', stock_workouts_id='1', favorited=False, progress_completed=True)
    workout56 = User_Workout(user_id='11', stock_workouts_id='2', favorited=True, progress_completed=True)
    workout57 = User_Workout(user_id='11', stock_workouts_id='2', favorited=True, progress_completed=True)




    workouts = [workout1, workout2, workout3, workout4,  workout6, workout7, workout8, workout9, workout10, workout11, workout12, workout13, workout14, workout14, workout15, workout16, workout17, workout18, workout19, workout20, workout21, workout22, workout23, workout24, workout25, workout26, workout27, workout28, workout29, workout30, workout31, workout32, workout33, workout34, workout35, workout36, workout37, workout38, workout39, workout40, workout41, workout42, workout43, workout44, workout45, workout46, workout47, workout48, workout49, workout50, workout51, workout52, workout53, workout54, workout55, workout56, workout57]


    for workout in workouts:
        db.session.add(workout)


    db.session.commit()


def undo_users_workouts():
    db.session.execute('DROP TABLE users_workouts CASCADE;')
    db.session.commit()
