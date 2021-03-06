from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SelectField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    DOB = StringField('DOB',  validators=[DataRequired()])
    user_name = StringField('user_name', validators=[DataRequired()])
    profile_photo = StringField('profile_photo', validators=[DataRequired()])
    boxing_level = StringField('boxing_level', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])

    


