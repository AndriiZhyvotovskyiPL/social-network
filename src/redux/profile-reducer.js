const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 15,
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 23,
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        }
    ],
    newPostText: 'Post text',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
                src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    postText: text
})

export default profileReducer;