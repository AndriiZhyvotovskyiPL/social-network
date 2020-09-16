import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Bro" id="2"/>
                <DialogItem name="Natali" id="3"/>
                <DialogItem name="Martin" id="4"/>
                <DialogItem name="Alex" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi, how are you?"/>
                <Message message="I don't know"/>
                <Message message="Ok bro"/>
                <Message message="U2"/>
            </div>
        </div>
    );
}

export default Dialogs;