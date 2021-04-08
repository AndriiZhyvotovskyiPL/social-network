import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} key={d.id}/>)

    let messagesIncome = props.messagesIncome.map(m => <Message message={m.message} key={m.id}/>)

    let messagesOutgoing = props.messagesOutgoing.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageText);
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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('newMessageText', Textarea, 'Message Text', [required, maxLength50])}
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogsNewMessage'
})(AddMessageForm)

export default Dialogs;