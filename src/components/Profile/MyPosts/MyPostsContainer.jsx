import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangePost = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <MyPosts
            addPost={addPost}
            updatePostText={onChangePost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;