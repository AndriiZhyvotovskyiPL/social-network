const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0,
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.postText;
    }
    return state;
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    postText: text
})
export default profileReducer;