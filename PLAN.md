# Coffee Forum App

View a forum post, like or reply to it.

## Data

## User

```jsx
const user = {
  id: 1,
  profile_url: "",
  name: "",
  username: "",
  bio: "",
};
```

## Users
What type are you ganna choose? Array? Object? You need to decide. 
Both work, but...
Two has pros and cons each.

Array => Easy to show all of them
Object => Easy to access a specific one

```jsx
const users = [user, user];
[].find();
//Of course, we can use this [].find() method to access a specific one, 
//but, that is a loop. So that means you're gonna go over all of your users, every time. 
const users = { id: user, id: user };
[id]; 
//This one is more easy, simple and clear to access the user directly. 
```


## Question

authorId should be between 1 and 6
that likes should always be 0,
the post id and reply id should be unique

```jsx
const question = {
  authorId: "1",
  id: "1",
  title: "",
  question: "",
  likes: 0,
  replies: [
    {
      id: "1",
      authorId: "",
      content: "",
      likes: 0,
    },
  ], //Array of replies! Because we want to see all of the replies at once in list. 
};
```

## Seed

View in file!

## Structure

![Screenshot](https://github.com/leslieyjkim/Mug_mingle_2024/blob/main/Wireframe.png?raw=true)

### HTML

### Components

Header
ForumPost
 -Question
 -Replylist
  --ReplyListItem (child of ReplyList)
 -ReplyForm


### Component Data