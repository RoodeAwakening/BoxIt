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
        return jsonify(action_photos.to_dict())
    elif method == 'POST':
        # post a new action shot
        return 'POST'


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
