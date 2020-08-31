import React from "react";
import s from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRL1brS7VjomKn2iqD-LXIyJbiClhK5Ci47A&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;