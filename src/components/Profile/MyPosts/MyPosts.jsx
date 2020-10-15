import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.state.posts.map(p => <Post message={p.message}
                                                         likesCount={p.likesCount}
                                                         src={p.src}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost}
                              ref={newPostElement}
                              value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;