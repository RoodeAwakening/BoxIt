from app.models import db, User_Group


def seed_user_groups():

    user_group1 = User_Group(user_id='1', groups_id='1')
    user_group2 = User_Group(user_id='1', groups_id='3')

    db.session.add(user_group1, user_group2)
    db.session.commit()


def undo_user_groups():
    db.session.execute('DROP TABLE users_groups;')
    db.session.commit()
