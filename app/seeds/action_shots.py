from app.models import db, Action_Shot


def seed_action_shots():

    photo1 = Action_Shot(user_id='1', photo_url='https://www.elitefts.com/wp/wp-content/uploads/2015/05/back-exercises-dom-brosciencelife.jpg')
    photo2 = Action_Shot(user_id='1', photo_url='https://naibuzz.com/wp-content/uploads/2017/01/Broscience-brosciencelife-Dom-Mazzetti-Most-Alpha-Shoulder-Exercsises.jpg')
    photo3 = Action_Shot(user_id='1', photo_url='https://scontent.fyip1-1.fna.fbcdn.net/v/t1.6435-9/48360455_2015425471867428_7660561092858347520_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uWw_PoDhNwoAX8iSg5X&_nc_ht=scontent.fyip1-1.fna&oh=098cb73a44803767b20432d62a2f224d&oe=6088C41C')
    photo4 = Action_Shot(user_id='1', photo_url='https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/35329509_1751575221585789_1458760464988110848_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=_1kM6xYqRrYAX-DNSUq&_nc_ht=scontent.fcmh1-1.fna&oh=2ca40ee0115670c2852bf2f0c4ad73c5&oe=60883453')

    action_shots = [photo1, photo2, photo3, photo4]

    for action_shot in action_shots:
        db.session.add(action_shot)

    db.session.commit()


def undo_action_shots():
    db.session.execute('DROP TABLE action_shots CASCADE;')
    db.session.commit()
