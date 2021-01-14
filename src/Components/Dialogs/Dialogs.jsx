import React from "react";
import s from './Dialogs.Module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dislogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Shaha
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Rita
                </div>
                <div className={s.dialog}>
                    Antoha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello World!</div>
                <div className={s.dialog}>Message from 2030!!</div>
                <div className={s.dialog}>Karamba!</div>
            </div>
        </div>
    )
}
export default Dialogs;