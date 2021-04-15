import React from 'react';
import s from './Navbar.Module.css'
import {NavLink} from "react-router-dom";

const Navigate = (props) => {
   return <div className={s.item}>
        <NavLink to={props.link}
                 activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}
const Navbar = (props) => {
    return <nav className={s.nav}>
        <Navigate link="/profile"                 name="Profile"/>
        <Navigate link={"/dialogs"}                  name={"Messages"}/>
        {/*<Navigate link={"/news"}                  name={"News"}/>*/}
        {/*<Navigate link={"/music"}                  name={"Music"}/>*/}
        {/*<Navigate link={"/settings"}                  name={"Settings"}/>*/}
    </nav>
}

export default Navbar;