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

  const questionInfo = getQuestionInformation()  //callback function 

  return (
    <>
      <Header />
      <main>
        <Question { ...questionInfo }/>  
        <ReplyList />
        <ReplyForm onSubmit="" /> 
      </main>
    </>
  )
}

export default App
