import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
    return (
        <section className='ReplyList'>
            <h1>X replies to this question</h1>
            <ul>
                <ReplyListItem />
                <ReplyListItem />
            </ul>
        </section>
    )
}