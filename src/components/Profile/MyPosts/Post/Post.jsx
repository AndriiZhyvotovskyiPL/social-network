import React from "react";
import s from "./Posts.module.css";

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRL1brS7VjomKn2iqD-LXIyJbiClhK5Ci47A&usqp=CAU" alt=""/>
                post 1
            </div>
        </div>
    );
}

export default Post;