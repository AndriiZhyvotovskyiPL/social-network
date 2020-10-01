import React from "react";
import s from "./../NavBar.module.css";

const Friends = (props) => {
    return (
        <div className={s.item}>
            <img src={props.src} alt=""/>
            {props.name}
        </div>
    );
}

export default Friends;