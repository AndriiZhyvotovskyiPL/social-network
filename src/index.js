import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id : 1, message : 'Hi, how are you?', likesCount : 15},
    {id : 2, message : 'It\'s my first post', likesCount : 23}
]

let dialogs = [
    {id : 1, name : 'Dimych'},
    {id : 2, name : 'Bro'},
    {id : 3, name : 'Natali'},
    {id : 4, name : 'Martin'},
    {id : 5, name : 'Alex'}
]

let messages = [
    {id : 1, message : 'Hi, how are you?'},
    {id : 2, message : 'I don\'t know'},
    {id : 3, message : 'Ok bro'},
    {id : 4, message : 'U2'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
