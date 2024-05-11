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

  return (
    <>
      <Header />
      <main>
        <Question />
        <ReplyList />
        <ReplyForm onSubmit="" /> 
      </main>
    </>
  )
}

export default App
