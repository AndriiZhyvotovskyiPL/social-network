import React from "react";
import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesIncome: state.dialogsPage.messagesIncome,
        messagesOutgoing: state.dialogsPage.messagesOutgoing,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {sendMessage, updateMessage})(Dialogs);