import { useState } from "react";

import Header from "./components/Header";
import Question from "./components/Question";
import ReplyList from "./components/ReplyList";
import ReplyForm from "./components/ReplyForm";

import { usersObj } from "./data/userData";
import { forumPost } from "./data/postData"; 

import './App.css'


function App() {
  const [users, setUsers] = useState(usersObj); //create 'state' for each to access those data things.
  const [post, setPost] = useState(forumPost); //create 'state' for each to access those data things.


  const getQuestionInformation = () => {       //create function of 'getQuestionInformation' which returns at the end object containing 'authorName, authorProfile, question'.
    const {authorId, question} = post          //I'm gonna abstract authorId & question from the postData in data.

    const authorName = users[authorId].name;                 //And if I want to get the 'authorName', this will be 'users' at the position of the authorId(in postData) & and with that authorId, I want to know their name(in userData).
    const authorProfile = users[authorId].profile_url;

    return {
      authorName, 
      authorProfile, 
      question,
    };
  };

  // const questionInfo = getQuestionInformation()  //callback function 
  // getQuestionInformation()  //the function references the object, and I spread this object below, including 'authorName, authorProfile, question' 


  const getRepliesFromPost = () => {
    // const replies = post.replies         
    //above line: specify what we want of how we get all of the replies. At here, 1 missing point: for all replies, I want to add more things to the profile. how?
    //Need to create 'new array' out of the original one to have all the information. At here, the 'map method' comes!

    const replies = post.replies.map((reply) => ({ 
      ...reply, 
      authorName: users[reply.authorId].username,
      authorProfile: users[reply.authorId].profile_url,   //spread reply, and then add 2 informations(authorName, authorProfile) in object.
     }));

     return replies;
  };


  const addReply = (replyText) => {
    const id = post.replies.length+1;
    const randomId = Math.ceil(Math.random() * 6);

    const newReply = {id, authorId: randomId, likes: 0, content: replyText };

    //post.replies.push(newReply); 
    //above coding is not correct, it says: Hey post,  I want to add newReply onto your replies. 
    //At here, the replies updated(changed) newly, but still the post is remaining same. 
    //So browser not to re-render. 
    //So! we need to create 'new post'. 
    //Below coding is updated version.

    const updatedPost = { ...post };
    //Hey, updatedPost, you know your replies, right? : updatedPost.replies = 
    //that should be all of the post's replies that I have : [...post.replies]
    //above line is recreating the new array with the all of replies's object.
    updatedPost.replies = [ ...post.replies, newReply] //and add up the newReply at the end of the array.

    setPost(updatedPost);
  };


  const addQuestionLike = () => {
     const updatedPost = { ...post };
     updatedPost.likes = updatedPost.likes + 1;

     setPost(updatedPost);
  }


  return (
    <>
      <Header />
      <main>
        <Question { ...getQuestionInformation() }/>  
        <ReplyList replies={getRepliesFromPost()}/>
        <ReplyForm onSubmit={addReply} /> 
      </main>
    </>
  )
}

export default App
