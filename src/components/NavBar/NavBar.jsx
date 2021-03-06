import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {
    let friendsElement = props.friends.map(f => <Friends name={f.name} src={f.src} key={f.id}/>)
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
            <div className={`${s.item} ${s.users}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
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