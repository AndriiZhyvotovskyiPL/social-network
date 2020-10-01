import React from "react";

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
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Bro'},
            {id: 3, name: 'Natali'},
            {id: 4, name: 'Martin'},
            {id: 5, name: 'Alex'}
        ],
        messages: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'I don\'t know'},
            {id: 3, message: 'Ok bro'},
            {id: 4, message: 'U2'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 1, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
        ]
    }
}

export default state;