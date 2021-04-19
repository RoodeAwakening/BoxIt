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
    photo5 = Progress_Photo(user_id='1', photo_url='https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/46814180_1993807187362590_6888529670451494912_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=r-roUAHP5GkAX9vD06Q&_nc_ht=scontent.fcmh1-1.fna&oh=9e20cd051095f43ed07ac428065586be&oe=60889772')
    photo6 = Progress_Photo(user_id='1', photo_url='https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/46722173_1989437951132847_7663997191249199104_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=3N6J8QnbxXwAX_4UCez&_nc_oc=AQkHab6v4h2mvSEeeLtiH6InVa3S1b-bwjFEWBPkGVw8atS8GEn70DLMdkn7SljaYoQ&_nc_ht=scontent.fcmh1-1.fna&oh=a72152d02937d99eb5e44fcce716e18f&oe=60890183')
    photo7 = Progress_Photo(user_id='1', photo_url='https://imgix.ranker.com/list_img_v2/4526/2084526/original/youtube-broscience-videos?w=817&h=427&fm=jpg&q=50&fit=crop')

    photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]

    for photo in photos:
        db.session.add(photo)

    db.session.commit()


def undo_progress_photos():
    db.session.execute('DROP TABLE progress_photos;')
    db.session.commit()
