from app.models import db, Action_Shot


def seed_action_shots():

    photo1 = Action_Shot(user_id='1', photo_url='https://www.elitefts.com/wp/wp-content/uploads/2015/05/back-exercises-dom-brosciencelife.jpg')
    photo2 = Action_Shot(user_id='2', photo_url='https://classpass-res.cloudinary.com/image/upload/f_auto,q_auto/nmdoxpsoel8hlihfn5gh.png')
    photo6 = Action_Shot(user_id='3', photo_url='https://i.pinimg.com/originals/cb/9e/67/cb9e6733fe2b814a997705b28f763cb6.jpg')
    photo7 = Action_Shot(user_id='1', photo_url='https://www.thefightcity.com/wp-content/uploads/2018/11/tyson-fury-action-shot.jpg')
    photo8 = Action_Shot(user_id='4', photo_url='https://i.pinimg.com/originals/3c/43/f3/3c43f3a3b736443526539530690a7c50.jpg')
    photo3 = Action_Shot(user_id='1', photo_url='https://naibuzz.com/wp-content/uploads/2017/01/Broscience-brosciencelife-Dom-Mazzetti-Most-Alpha-Shoulder-Exercsises.jpg')
    photo9 = Action_Shot(user_id='5', photo_url='https://media.istockphoto.com/photos/successful-female-boxer-celebrating-her-victory-in-a-health-club-picture-id669944592?k=6&m=669944592&s=612x612&w=0&h=iwgzCeK2p29p81QkXhq6vkUQJaeXEyxZiCuxI_meQkM=')
    photo10 = Action_Shot(user_id='6', photo_url='https://cdn.phonebooky.com/blog/wp-content/uploads/2018/08/16154725/Untitled-design-151.png')
    photo11 = Action_Shot(user_id='7', photo_url='https://www.usmagazine.com/wp-content/uploads/2018/09/Celebrities-at-the-Gym-05.jpg?quality=86&strip=all')
    photo12 = Action_Shot(user_id='7', photo_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C1t3jrlzIYi57x9mceYnbwNi52MzN4KX3A&usqp=CAU')
    photo13 = Action_Shot(user_id='8', photo_url='https://www.insidehook.com/wp-content/uploads/2019/08/grit_Class_Selects-147-1.jpg?fit=2048%2C1366')
    photo14 = Action_Shot(user_id='1', photo_url='https://www.greatestphysiques.com/wp-content/uploads/2017/05/dom-mazzetti-flexing-in-front-of-a-camera-with-an-angry-and-humouros-grimace-on-his-face.jpg')
    photo15 = Action_Shot(user_id='10', photo_url='https://pbs.twimg.com/media/CKUbO1vWwAAZ5sA.jpg')
    photo16 = Action_Shot(user_id='2', photo_url='https://fortunegym.com/wp-content/uploads/2015/09/11357508_1591004057818652_1909363438_n-1-300x300.jpg')

    action_shots = [photo1, photo2, photo3, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16]

    for action_shot in action_shots:
        db.session.add(action_shot)

    db.session.commit()


def undo_action_shots():
    db.session.execute('DROP TABLE action_shots CASCADE;')
    db.session.commit()
