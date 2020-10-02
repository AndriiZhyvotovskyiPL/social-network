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
        }
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