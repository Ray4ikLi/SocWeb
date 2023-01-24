import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/me' >Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/im'>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/feed'>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;