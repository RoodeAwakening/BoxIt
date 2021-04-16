from app.models import db, Comment, User, Group
import random


commentList = [
    "Boxing gyms?? What are those?? LOL!!",
    "ready to hit some thing!",
    "whos up for a workout later today?",
    "Im headed to the number 1 spot, whos going to catch me",
    "what a workout!",
    "I agree!!!",
    "Jab Cross!",
    "Im taking a couple of days off",
    "how did you do?",
    "Anyone belong to a boxing gym?",
    "I finished two workouts today",
    "I really wish it was nicer outside so I could go for a jog for my warmup",
    "Who else needs a vacation?",
    "Is anyone selling any used equipment?",
    "I can help with that",
    "ME! ME! ME!",
    "Cant Wait!!",
    "Just your normal monday morning.. am I right lol",
    "The developer for this app is the best",
    "Monday Tuesday Happy Days",
    "Please no more burpies",
    "I cant believe I did crossfit over this!!!!",
    "New progress photo coming soon. whos ready for it?",
    "group workouts?",
    "I wonder what the next new feature on this app is going to be. There are so many great ones already.",
    "Can somoene show me the proper way to wrap my hands?",
    "Any tips on how to hang a heavy bag?",
    "Making lunch, I am starving after that workout.",
    "The only app I need in my life is this one!",
    "Had a really good coach today. Whooped my butt!!",
    "Which one of you are in the #4 spot on the leaderboard?",
    "Wow there really are a lot of poeople on this site now",
    "Another day down another workout in the books!",
    "This app is awesome! I would 100 recommend it",

]



def seed_comments():
    users = User.query.all()
    groups = Group.query.all()

    cmnt = 0
    for user in users:
        for group in groups:
            if random.randrange(0, 100) > 25:
                comment = Comment(group_id=group.id , user_id=user.id, content=commentList[random.randrange(0,len(commentList))], photo_url='')
                db.session.add(comment)
                cmnt += 1
                print('----- Count: %s%% -- New Comment: %s' % ((cmnt, comment.to_dict())))
    db.session.commit()

    # comment1 = Comment(group_id='1', user_id='1',
    #                    content='Lets go!!!', photo_url='')
    # comment2 = Comment(group_id='1', user_id='1', content='OUCH I am dead today!!',
    #                    photo_url='https://img.wattpad.com/cover/133680768-288-k678143.jpg')
    # comment3 = Comment(group_id='1', user_id='1',
    #                    content='That workout was intense yesterday!', photo_url='')
    # comment4 = Comment(group_id='1', user_id='1',
    #                    content='Lets do this!', photo_url='')

    # comments = [comment1, comment2, comment3, comment4]

    # for comment in comments:
    #     db.session.add(comment)

    # db.session.commit()


def undo_comments():
    db.session.execute('DROP TABLE comments;')
    db.session.commit()
