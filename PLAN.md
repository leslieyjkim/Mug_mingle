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

### Jquery vs React
Goal of Jquery : functions for JS DOM / to Mutate the DOM / to Change the contents you actually see / to Change the page actively / Replace & update with new things

ex: query selector, append element, create element etc. 


Goal of React : "I'll manage my own DOM(VDOM:virtual DOM), because I dont' trust the DOM." / Everytime data in my store changes, apply modifications to my vDOM, then apply those to the DOM. "oh! something changed? I'm gonna look at my tree of components, does it change actually something? If so, I'm gonna change it, and then I'll say 'Hey browser, that's my shape and please put that now!(Rendering).'

So, React is to be closer to Express(EJS) than Jquery. 

Every time that we say 'Hey I changed something', it's gonna go down and run all of the functions again. Which means that if I run the whole functions again, I already lose the content of my variables in that functions. (Because I ran it again. ) So we need new way to store data outside of our component function. So where is my outside of my component, the 'useState' hook. That data lives outside of your component function. Which means, that if we re-render that thing I'll not lose the data. This is the point the 'useState' comes!

### Why do we need a 'state'?
To call the state, we have what we call 'useState' hook. What is the hook is? Hooking to the functionality. Then why do we need to do that? 






### IMMUTABILITY
```
const bob = [1,2,3,['a']]
const bobby = [...bob]

bob.push(4)
console.log(bob) //return [1,2,3,['a'],4]
console.log(bobby) //return [1,2,3,['a']]


bob[3].push("b")
console.log(bob) //return [1,2,3,['a', 'b'],4]
console.log(bobby) //return [1,2,3,['a', 'b']]   //This is the shocking revelation! You should know the reason. 


//Bob is an array [1,2,3]
//Bobby is [...bob]
//create an array, then add the values of bob, 1, 2, 3

//Let's see another version which has an array in array.
//Bob is an array [1,2,3,['a']]
//Bobby is [...bob]
//create an array, then add the values of bob, 1, 2, 3, ['a'] 
//at here, we can store only value, not array['a] (Array and object are reference). Shallow copy = copy just reference. (not full copy)
```



.pop() this gonna pop the last value. 

But .pop() is not immutable.
Because .pop() changes the original value like below;

```
const bob = [1,2,3,[a,b],4]

bob.pop() returns 4
bob.pop() returns ['a', 'b']
bob.pop() returns 3
bob.pop() returns 2
bob.pop() returns 1
bob.pop() returns undefined //nothing to pop anymore.
```



.map() is immutable.
it won't change the original value like below;

```
const bob = [1,2,3,[a,b]]

bob.map(element => element * 2) returns [2,4,6, NaN]
bob.map(element => element * 2) returns [2,4,6, NaN]
bob.map(element => element * 2) returns [2,4,6, NaN]
bob.map(element => element * 2) returns [2,4,6, NaN]
bob.map(element => element * 2) returns [2,4,6, NaN]
//Everytime I try, it shows same result. 

```

[...array] If you use this spread and then modify things, 
your original structure can keep their original form even after modifying. 


###using ChatGPT
Hey, can you make an example of a javascript data structure representing anime shows from the 90s, nested 4 levels deep with 5 elements? 

then, it will produce the data structure. 

