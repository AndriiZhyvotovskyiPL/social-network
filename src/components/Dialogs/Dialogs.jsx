import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreate, updateMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)

    let incomeMessages = props.state.messages.income.map(m => <Message message={m.message}/>)

    let outgoingMessages = props.state.messages.outgoing.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreate());
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(updateMessageActionCreator(text));
    }

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
                <div>
                    <textarea ref={newMessage}
                              onChange={onChangeMessage}
                              value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;