from app.models import db, Progress_Photo


def seed_progress_photos():
    photo1 = Progress_Photo(
        user_id='1', photo_url='https://cdn.shopify.com/s/files/1/2224/2181/files/BSL_Growda_Banner_square_x800.jpg')
    photo2 = Progress_Photo(
        user_id='1', photo_url='https://pbs.twimg.com/profile_images/424914702154493954/HQmZoWkf_400x400.jpeg')
    photo3 = Progress_Photo(
        user_id='1', photo_url='https://i.ytimg.com/vi/DehdMKIMLFY/hqdefault.jpg')
    photo4 = Progress_Photo(
        user_id='1', photo_url='https://pbs.twimg.com/media/EOrb5waUUAAF5oS.jpg')
    photo7 = Progress_Photo(user_id='1', photo_url='https://imgix.ranker.com/list_img_v2/4526/2084526/original/youtube-broscience-videos?w=817&h=427&fm=jpg&q=50&fit=crop')
    photo8 = Progress_Photo(user_id='2', photo_url='https://specials-images.forbesimg.com/imageserve/5f298efbe2252631e7028543/960x0.jpg?fit=scale')
    photo9 = Progress_Photo(user_id='2', photo_url='https://static01.nyt.com/images/2021/01/09/us/09wealth-print/08wealth-mediumSquareAt3X.jpg')

    photos = [photo1, photo2, photo3, photo4, photo7, photo8, photo9]

    for photo in photos:
        db.session.add(photo)

    db.session.commit()


def undo_progress_photos():
    db.session.execute('DROP TABLE progress_photos;')
    db.session.commit()
