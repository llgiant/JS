import React from "react";
import s from './Dialogs.Module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}
                 activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {


    let dialogsElement = props.dialogsArr.map(d => <DialogItem name={d.name}  id={d.id}/>);
    let messagesElements = props.messagesArr.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
    )
}
export default Dialogs;