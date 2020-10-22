import React from "react";
import {sendMessageActionCreate, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreate());
        },
        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;