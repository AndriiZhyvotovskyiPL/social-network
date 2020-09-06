import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Bro
                </div>
                <div className={s.dialog}>
                    Natali
                </div>
                <div className={s.dialog}>
                    Martin
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, how are you?
                </div>
                <div className={s.message}>
                    I don't know
                </div>
                <div className={s.message}>
                    Ok bro
                </div>
            </div>
        </div>
    );
}

export default Dialogs;