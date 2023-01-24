import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <header className={s.header}>
            <NavLink to="/me"><img
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png" alt=""/></NavLink>
        </header>
    )
}

export default Header;