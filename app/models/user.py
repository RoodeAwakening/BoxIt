from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    user_name = db.Column(db.String(40), nullable=False, unique=True)
    DOB = db.Column(db.DateTime)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_photo = db.Column(db.String, nullable=False)
    boxing_level = db.Column(db.String, nullable=False)
    workouts_completed = db.Column(db.Integer, nullable=True)
    createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
    updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    # relationships
    users_groups = db.relationship("User_Group", backref="users")
    comments = db.relationship("Comment", backref="users")
    action_shots = db.relationship("Action_Shot", backref="users")
    users_workouts = db.relationship("User_Workout", backref="users")
    progress_photos = db.relationship("Progress_Photo", backref="users")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_name": self.user_name,
            "DOB": self.DOB,
            "email": self.email,
            "profile_photo": self.profile_photo,
            "boxing_level": self.boxing_level,
            "workouts_completed": self.workouts_completed,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
            
        }

# this is whats being used in the comment route query
    def comment(self):
        return {
             "user_name": self.user_name,
             "profile_photo": self.profile_photo,
             "boxing_level": self.boxing_level,
        }
