from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CommentForm(FlaskForm):
    content = StringField('content', [DataRequired()])
    photo_url = StringField('photo_url')
    