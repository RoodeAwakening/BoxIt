from flask.cli import AppGroup
from .users import seed_users, undo_users
from .action_shots import seed_action_shots, undo_action_shots
from .comments import seed_comments, undo_comments
from .groups import seed_groups, undo_groups
from .progress_photos import seed_progress_photos, undo_progress_photos
from .stock_workouts import seed_stock_workouts, undo_stock_workouts
from .users_groups import seed_user_groups, undo_user_groups
from .users_workouts import seed_users_workouts, undo_users_workouts


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_action_shots()
    seed_groups()
    seed_progress_photos()
    seed_stock_workouts()
    seed_users_workouts()
    seed_user_groups()
    seed_comments()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_comments()
    undo_user_groups()
    undo_progress_photos()
    undo_groups
    undo_action_shots()
    undo_stock_workouts()
    undo_users_workouts()
    undo_users()
    # Add other undo functions here
