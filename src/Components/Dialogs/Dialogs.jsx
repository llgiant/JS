import React from "react";
import s from "./Dialogs.Module.css";
import {NavLink} from "react-router-dom";
import {Button} from "reactstrap";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path} activeClassName={s.activeLink}>
                {props.name}
            </NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id}/>
    ));
    let messagesElements = props.state.messages.map((m) => (
        <Message message={m.message}/>
    ));

    let newDialogMessage = React.createRef();
    let newDialogName = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onNameChange = () => {
        let text = newDialogName.current.value;
        props.updateNewNameText(text);
    };

    let onMessageChange = () => {
        let text = newDialogMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <h3>Диалоги</h3>
            <br/>
            <div className={s.dialogsItems}>{dialogElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <div className={s.postBlocks}>
                <textarea
                    ref={newDialogName}
                    value={props.state.newDialogName}
                    onChange={onNameChange}
                />
                <textarea
                    ref={newDialogMessage}
                    value={props.state.newDialogMessage}
                    onChange={onMessageChange}
                />
                <Button color="success" onClick={addMessage}>
                    Отправить сообщение
                </Button>
            </div>
        </div>
    );
};
export default Dialogs;
