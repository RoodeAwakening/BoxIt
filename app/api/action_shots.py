from flask import Blueprint, jsonify, request
from app.models import Action_Shot, db
from flask_login import login_required


action_shots_route = Blueprint('action_shots', __name__)


@action_shots_route.route('/', methods=['GET', 'POST'])
# @login_required
def action_shot():
    method = request.method
    if method == 'GET':
        # Get all action shots
        action_photos = Action_Shot.query.all()
        return {"action_shots": [action_photo.to_dict() for action_photo in action_photos]}
    elif method == 'POST':
        # post a new action shot
        new_photo = request.json['action_shot_post']
        shot = Action_Shot(user_id=1, photo_url=new_photo)
        db.session.add(shot)
        db.session.commit()
        return {'new_action_shot':[shot.to_dict()]}


@action_shots_route.route('/<int:id>', methods=['GET', 'DELETE'])
# @login_required
def indidual_action_shot():
    method = request.method
    if method == 'GET':
        # get an individual action shot
        return "GET"
    elif method == 'DELETE':
        # delete an individual action shot
        return 'DELETE'
