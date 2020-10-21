import React from "react";
import {sendMessageActionCreate, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreate());
                }

                let onChangeMessage = (text) => {
                    store.dispatch(updateMessageActionCreator(text));
                }
                return (
                    <Dialogs sendMessage={sendMessage}
                             updateMessage={onChangeMessage}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageText={state.dialogsPage.newMessageText}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;