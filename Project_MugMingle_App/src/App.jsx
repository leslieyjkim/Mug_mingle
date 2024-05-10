import Header from "./components/Header";
import Question from "./components/Question";
import ReplyList from "./components/ReplyList";

import './App.css'


function App() {
  return (
    <>
      <Header />
      <main>
        <Question />
        <ReplyList />
        <form className='ReplyForm'>
          <input type="text" name="reply" placeholder='Enter your reply' />
          <button>Add</button>
        </form>
      </main>
    </>
  )
}

export default App
