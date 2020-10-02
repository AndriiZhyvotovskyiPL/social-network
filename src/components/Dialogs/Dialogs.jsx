import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)

    let incomeMessages = props.state.messages.income.map(m => <Message message={m.message}/>)

    let outgoingMessages = props.state.messages.outgoing.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {incomeMessages}
            </div>
            <div className={s.messages}>
                {outgoingMessages}
            </div>
        </div>
    );
}

export default Dialogs;