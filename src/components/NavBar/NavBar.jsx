import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {
    let friendsElement = props.state.friends.map(f => <Friends name={f.name} src={f.src}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.setting}`}>
                <NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink>
            </div>
            <div className={s.friends}>
                Friends
                <div className={s.friendsImg}>
                    {friendsElement}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;