import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} key={d.id}/>)

    let messagesIncome = props.messagesIncome.map(m => <Message message={m.message} key={m.id}/>)

    let messagesOutgoing = props.messagesOutgoing.map(m => <Message message={m.message} key={m.id}/>)

    let newMessage = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.updateMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesIncome}
            </div>
            <div className={s.messages}>
                {messagesOutgoing}
                <div>
                    <textarea ref={newMessage}
                              onChange={onChangeMessage}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;