import Header from "./components/Header";
import Question from "./components/Question";

import './App.css'


function App() {
  return (
    <>
    <Header />
    <Question />
    <main>
      <section className='ReplyList'>
        <h1>X replies to this question</h1>
        <ul>
          <li className='ReplyListItem'>
            <img src="" alt=""/>
            <p>Name</p>
            <p>Reply</p>
          </li>
        </ul>
      </section>
      <form className='ReplyForm'>
        <input type="text" name="reply" placeholder='Enter your reply' />
        <button>Add</button>
      </form>
    </main>
    </>
  )
}

export default App
