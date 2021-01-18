import React from "react";
import s from './Dialogs.Module.css';
import {BrowserRouter, NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dislogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/Victor" activeClassName={s.activeLink}>Victor
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Shaha" activeClassName={s.activeLink}>Shaha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Lena" activeClassName={s.activeLink}> Lena </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Rita" activeClassName={s.activeLink}>Rita </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Antoha" activeClassName={s.activeLink}>Antoha </NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>Hello World!</div>
                <div className={s.dialog}>Message from 2030!!</div>
                <div className={s.dialog}>Karamba!</div>
            </div>
        </div>
        </BrowserRouter>

    )
}
export default Dialogs;