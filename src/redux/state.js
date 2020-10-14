const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 2, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 3, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 4, name: 'Martin', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 5, name: 'Alex', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
            ],
            messages: {
                income: [
                    {id: 1, message: 'Hi, how are you?'},
                    {id: 2, message: 'I don\'t know'},
                    {id: 3, message: 'Ok bro'},
                    {id: 4, message: 'U2'}
                ],
                outgoing: [
                    {id: 1, message: 'Yep'},
                    {id: 2, message: 'Last night'},
                    {id: 3, message: 'Ok bro'},
                    {id: 4, message: '5 minute'}
                ]
            },
            newMessageText: 'Message text'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
                {id: 1, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
            ]
        }
    },

    _callSubscriber() {
        //observer
        //use rerenderEntireTree form index.js
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.outgoing.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageText = '';
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    postText: text
})

export const sendMessageActionCreate = () => ({type: SEND_MESSAGE})

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newMessageText: text
})

export default store;