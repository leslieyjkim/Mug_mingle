import './App.css'

function App() {
  return (
    <>
    <header className='Header'>
      <h1>Mug Mingle</h1>
    </header>
    <main>
      <section className='Question'>
        <h1>QUESTION</h1>
        <h2>BY PROFILE</h2>
      </section>
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
