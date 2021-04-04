
import React from "react";
import profileReducer, {addPost} from "./profile-reducer";

let state = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 0,
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 0,
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        }
    ]
}

test('add new post text', () => {
    let action = addPost('test text');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test(`new post text have message 'test text`, () => {
    let action = addPost('test text');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('test text');
});
