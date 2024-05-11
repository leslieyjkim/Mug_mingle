import { useState } from "react";

import Header from "./components/Header";
import Question from "./components/Question";
import ReplyList from "./components/ReplyList";
import ReplyForm from "./components/ReplyForm";

import { usersObj } from "./data/userData";
import { forumPost } from "./data/postData"; 

import './App.css'


function App() {
  const [users, serUsers] = useState(usersObj); //create 'state' for each to access those data things.
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
    //Need to create new array out of the original one to have more information. At here, the 'map method' comes!

    const replies = post.replies.map((reply) => ({ 
      ...reply, 
      authorName: users[reply.authorId].username,
      authorProfile: users[reply.authorId].profile_url,   //spread reply, and then add 2 informations in object.
     }));

     return replies;
  };

  return (
    <>
      <Header />
      <main>
        <Question { ...getQuestionInformation() }/>  
        <ReplyList replies={getRepliesFromPost()}/>
        <ReplyForm onSubmit="" /> 
      </main>
    </>
  )
}

export default App
