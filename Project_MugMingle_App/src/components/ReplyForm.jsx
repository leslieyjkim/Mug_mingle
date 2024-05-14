import { useState } from "react";

// Getter / Setter (W7D2 Lecture)

export default function ReplyForm(props) {
    const [reply, setReply] = useState(""); 
    //first part 'reply' is the value, 
    //second part 'setReply' is a function to update that value to something new.

    let replyText = "";

    //Let's create a function called 'handleChange'
    const handleChange = event => { //I want to listen to the 'event', and ask my value of my input(새로이입력된값), and then give it to setReply.
        const {value} = event.target //Can we get the value out of the event.target?

        setReply(value); //and then, setReply to a value of the event.target of handleChange.
        replyText += value; //concatenate the value there.
    }

    const handleSubmit = event => { //prevent the default(re-freshing page)
        event.preventDefault() //Hey, form! don't do the default re-freshing. 
         
        props.onSubmit(reply) //Hey,What I'm gonna submit you, what I want you to do is 'take reply & give it to somebody'.
        
        setReply('');
    }

    console.log("State value", reply); //Input창에 내가 입력한 값이 찍힘. Wiggle을 입력하면, W, Wi, Wig, Wigg, Wiggl, Wiggle 순으로 6차례 찍혀.
    console.log("Normal variable", replyText); //내가 Wiggle을 입력했어도 빈칸으로 나와.

    return (
        <form className='ReplyForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="reply" 
                placeholder='Enter your reply' 
                onChange={handleChange} 
                value={reply}/>  
            {/* Hey, input! When you change, trigger onChange, update your state. */}
            {/* then when you update your state, we re-render a new form. */}
            {/* with the new value that you put in {reply} */}
            <button>Add</button>
        </form>
    )
}





//Set a state for reply
//Set a variable for replyText
//Set a function for handleChange
//Log to console reply, replyText
//Return the JSX to show the form

// --- once trigger state change with setReply ---

//React will notice the state changed,
//React will notice that the old state is different from the new value, 
//and will ask the component to run again. 

//repeat again;

//Set a state for reply (Exists, managed by React)
//Set a variable for replyText
//Set a function for handleChange
//Log to console reply, replyText
//Return the JSX to show the form