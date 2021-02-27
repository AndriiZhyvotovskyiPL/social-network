import React from "react";
import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesIncome: state.dialogsPage.messagesIncome,
        messagesOutgoing: state.dialogsPage.messagesOutgoing,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let AuthRedirect = WithAuthRedirect(Dialogs);


export default connect(mapStateToProps, {sendMessage, updateMessage})(AuthRedirect);