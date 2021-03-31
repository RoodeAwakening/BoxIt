from app.models import db, Group


def seed_groups():

    group1 = Group(name='Tattoos and Boxing')
    group2 = Group(name='New to boxing!')
    group3 = Group(name='Westcost Wreckers!')
    group4 = Group(name='216 till I die!')
    group5 = Group(name='Summer Fit')
    group6 = Group(name='Lets punch thing!')

    groups = [group1, group2, group3, group4, group5, group6]

    for group in groups:
        db.session.add(group)

    db.session.commit()


def undo_groups():
    db.session.execute('DROP TABLE groups;')
    db.session.commit()