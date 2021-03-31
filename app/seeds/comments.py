from app.models import db, Comment


def seed_comments():

    comment1 = Comment(group_id='1', user_id='1',
                       content='Lets go!!!', photo_url='')
    comment2 = Comment(group_id='1', user_id='1', content='OUCH I am dead today!!',
                       photo_url='https://img.wattpad.com/cover/133680768-288-k678143.jpg')
    comment3 = Comment(group_id='1', user_id='1',
                       content='That workout was intense yesterday!', photo_url='')
    comment4 = Comment(group_id='1', user_id='1',
                       content='Lets do this!', photo_url='')

    comments = [comment1, comment2, comment3, comment4]

    for comment in comments:
        db.session.add(comment)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
