from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():
    password = generate_password_hash('password', method='pbkdf2:sha256', salt_length=10)
    user1 = User(first_name='Dom', last_name='Mazzetti', DOB='1989-07-07', user_name='BroScience', profile_photo='https://boxit.s3.us-east-2.amazonaws.com/dom.jpg', boxing_level='Beginner', email='demo@aa.io', hashed_password=password, workouts_completed=12)
    user2 = User(first_name='Stephanie', last_name='Radson', DOB='1989-06-05', user_name='Boxer4Life', profile_photo='https://www.sportsmanias.com/images/gallery/27-100-hottest-instagram/display/88-Lauryn-Eagle.jpg', boxing_level='Beginner', email='letsbox@aol.com', hashed_password=password, workouts_completed=3)
    user3 = User(first_name='Norton', last_name='Belview', DOB='1959-06-05', user_name='Mostly Snacks', profile_photo='https://www.stlmag.com/downloads/266196/download/Picture1.png?cb=15801fefed1780066fa199a2aab51d04&w=660&h=', boxing_level='Beginner', email='boxingCoach@title.com', hashed_password=password, workouts_completed=6)
    user4 = User(first_name='Vernon', last_name='Brooks', DOB='1989-02-07', user_name='VernonIntcat', profile_photo='https://randomuser.me/api/portraits/men/44.jpg', boxing_level='Advanced', email='vernon.brooks@westCoast.com', hashed_password=password, workouts_completed=8)
    user5 = User(first_name='Claudia', last_name='Kuhn', DOB='1959-08-07', user_name='ClaudIt', profile_photo='https://randomuser.me/api/portraits/women/52.jpg', boxing_level='beginner', email='claudia.kuhn@gmail.com', hashed_password=password, workouts_completed=2)
    user6 = User(first_name='Ruben', last_name='Hall', DOB='1952-03-05', user_name='RubenSandwitch', profile_photo='https://randomuser.me/api/portraits/men/71.jpg', boxing_level='Intermidiate', email='ruben.hall@aol.com', hashed_password=password, workouts_completed=6)
    user7 = User(first_name='Susan', last_name='Phillips', DOB='1999-06-05', user_name='CaptainPhillips', profile_photo='https://randomuser.me/api/portraits/women/54.jpg', boxing_level='beginner', email='susan.phillips@me.com', hashed_password=password, workouts_completed=5)
    user8 = User(first_name='Cassandra', last_name='Lynch', DOB='1979-08-04', user_name='Frosty4Me', profile_photo='https://randomuser.me/api/portraits/women/69.jpg', boxing_level='beginner', email='cassandra.lynch@energy.com', hashed_password=password, workouts_completed=2)
    user9 = User(first_name='Connor', last_name='Jordan', DOB='1989-02-013', user_name='Connor Canue', profile_photo='https://randomuser.me/api/portraits/men/63.jpg', boxing_level='beginner', email='connorcanue@gmail.com', hashed_password=password, workouts_completed=1)
    user10 = User(first_name='Brittany', last_name='Watkins', DOB='1999-06-05', user_name='ChristopherWatkins', profile_photo='https://randomuser.me/api/portraits/women/80.jpg', boxing_level='Expert', email='watkins@watkins.com', hashed_password=password, workouts_completed=7)
    user11 = User(first_name='Gabriella', last_name='Black', DOB='1989-07-07', user_name='GabbyGabs', profile_photo='https://randomuser.me/api/portraits/women/95.jpg', boxing_level='beginner', email='gabbygabs@gmail.com', hashed_password=password, workouts_completed=5)

    users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]
    for user in users:
        db.session.add(user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('DROP TABLE users CASCADE;')
    db.session.commit()
