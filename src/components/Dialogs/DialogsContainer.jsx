import React from "react";
import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesIncome: state.dialogsPage.messagesIncome,
        messagesOutgoing: state.dialogsPage.messagesOutgoing,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateMessage}),
    WithAuthRedirect
)(Dialogs);