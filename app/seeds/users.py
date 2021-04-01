from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():
    password = generate_password_hash('password', method='pbkdf2:sha256', salt_length=10)
    demo = User(first_name='Dom', last_name='Mazzetti', DOB='1989-07-07', user_name='BroScience', profile_photo='https://scontent.fcmh1-1.fna.fbcdn.net/v/t31.18172-8/14633550_1123809221029062_6936248958858562733_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=WrXniZTTMMYAX_Xwpki&_nc_ht=scontent.fcmh1-1.fna&oh=d24d1bfe7821c2bf2a1f6602a81b33ea&oe=60895C1B', boxing_level='beginner', email='demo@aa.io', hashed_password=password)

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('DROP TABLE users CASCADE;')
    db.session.commit()
