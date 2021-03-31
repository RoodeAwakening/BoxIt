from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import CommentForm
from app.models import Group, db, Comment


group_routes = Blueprint('groups', __name__)


@group_routes.route('/', methods=['GET', 'POST'])
# @login_required
def groups():
    method = request.method
    if method == 'GET':
      # Get all Groups
        groups = Group.query.all()
        return {"groups": [group.to_dict() for group in groups]}
    elif method == 'POST':
      # Add a new Group
        group_name = request.json['name']
        group = Group(name=group_name)
        db.session.add(group)
        db.session.commit()
        return jsonify(group.to_dict())


@group_routes.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @login_required
def individual_groups(id):
    method = request.method
    if method == 'GET':
      # Get an individual Group
        group = Group.query.get(id)
        return jsonify(group.to_dict() if group else 'No Group Exists')
    elif method == 'PATCH':
      # Update the name of a Group
        group = Group.query.get(id)
        if group:
            name = request.json['name']
            group.name = name
            db.session.commit()
        return jsonify(group.to_dict() if group else 'No Group Exisxts')
        return "Patch"
    elif method == 'DELETE':
      # Delete a Group
        success = Group.query.filter(Group.id == id).delete()
        db.session.commit()
        return jsonify('Successfully deleted' if success else 'No Group Exists')


@group_routes.route('/<int:id>/comments', methods=['GET', 'POST'])
# @login_required
def group_comments(id):
    # Get all comments for a given group
    method = request.method
    if method == 'GET':
        comments = []
        group = Group.query.get(id)
        comments_from_group = group.comments
        for comment in comments_from_group:
            comments.append({
                "comment": comment.to_dict()
            })
        return jsonify(comments if comments else 'Be there first to comment!')
    if method == 'POST':
      # Add a comment to a given group
        form = CommentForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        comment = ''
        if form.validate_on_submit():
            comment = Comment(
                group_id=id,
                user_id=1,
                content=form.data['content'],
                photo_url=form.data['photo_url'],
            )
            db.session.add(comment)
            db.session.commit()
        return jsonify({'comment': comment.to_dict()} if comment else 'Invalid Operation')
