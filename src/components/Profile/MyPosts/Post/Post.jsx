import React from "react";
import s from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.src} alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;