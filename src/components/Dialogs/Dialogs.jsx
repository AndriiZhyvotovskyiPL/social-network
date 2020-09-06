import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.activeLink}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.activeLink}>Bro</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.activeLink}>Natali</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.activeLink}>Martin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.activeLink}>Alex</NavLink>
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