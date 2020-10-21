import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onChangePost = (text) => {
                    store.dispatch(updatePostTextActionCreator(text));
                }

                return (
                    <MyPosts
                        addPost={addPost}
                        updatePostText={onChangePost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;