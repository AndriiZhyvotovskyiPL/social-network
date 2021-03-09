import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   likesCount={p.likesCount}
                                                   src={p.src}
                                                   key={p.id}/>)

    const addNewPost = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} placeholder={'Post Text'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'profileAddNewPost'
})(AddNewPostForm)

export default MyPosts;