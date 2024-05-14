//Reducer : Grouping everything together for cleaner code/app.


//action.type
//"QUESTION_INFO"
//"POST_REPLIES"
//"ADD_REPLY"
//"ADD_QUESTION_LIKE"

//Let's merge 2 states in App.jsx together into 1;
// const state = {
//     users,
//     post,
// };


//Let's use the 'switch case' for using different action.type. (better than if statement here)
//example: in this case, do this. in this case, don't do this.
//Hey, here is 'action.type => and then do your thing in that action.type.


export const postReducer = (state, action) => {
    const updatedPost = { ...state.post };
    switch (action.type) {
        case "ADD_REPLY":
            // eslint-disable-next-line no-case-declarations
            const id = state.post.replies.length + 1;
            // eslint-disable-next-line no-case-declarations
            const randomId = Math.ceil(Math.random() * 6);

            // eslint-disable-next-line no-case-declarations
            const newReply = {
                id, 
                authorId: randomId, 
                likes: 0, 
                content: action.payload.reply,
            };

            updatedPost.replies = [ ...state.post.replies, newReply];

            return { ...state, post: updatedPost };

        // case "QUESTION_INFO":
        //     const {authorId, question} = state.post;
        //     const authorName = state.users[authorId].name;
        //     const authorProfile = state.users[authorId].profile_url;

        //     return {
        //         authorName, 
        //         authorProfile, 
        //         question,
        //     };
              
        // case "POST_REPLIES":
        //     const replies = state.post.replies.map((reply) => ({ 
        //         ...reply, 
        //         authorName: state.users[reply.authorId].username,
        //         authorProfile: state.users[reply.authorId].profile_url,
        //        }));

        //     return replies;

        case "ADD_QUESTION_LIKE":
            updatedPost.likes = updatedPost.likes + 1;

            return { ...state, post: updatedPost };

        default:
            return "WHAT"; 
    }
}; 