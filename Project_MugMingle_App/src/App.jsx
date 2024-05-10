import Header from "./components/Header";
import Question from "./components/Question";
import ReplyList from "./components/ReplyList";
import ReplyForm from "./components/ReplyForm";

import './App.css'


function App() {
  return (
    <>
      <Header />
      <main>
        <Question />
        <ReplyList />
        <ReplyForm />
      </main>
    </>
  )
}

export default App
