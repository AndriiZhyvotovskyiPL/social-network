import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;