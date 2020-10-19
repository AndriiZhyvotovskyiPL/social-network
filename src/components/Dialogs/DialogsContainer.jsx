import React from "react";
import {sendMessageActionCreate, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreate());
    }

    let onChangeMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    return (
        <Dialogs sendMessage={sendMessage}
                 updateMessage={onChangeMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;