export default function ReplyForm(props) {
    return (
        <form className='ReplyForm'>
            <input type="text" name="reply" placeholder='Enter your reply' />
            <button>Add</button>
        </form>
    )
}