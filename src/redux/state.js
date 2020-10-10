let rerenderEntireTree = () => {
    //observer
    //use rerenderEntireTree form index.js
}

let state = {
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
        newMessage: 'Message text'
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 1, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
        src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}

export const updatePostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export const sandMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messages.outgoing.push(newMessage);
    rerenderEntireTree(state);
    state.dialogsPage.newMessage = '';
}

export const updateMessage = (newMessageText) => {
    state.dialogsPage.newMessage = newMessageText;
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;