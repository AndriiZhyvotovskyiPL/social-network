const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText
        }
        state.messages.outgoing.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_MESSAGE) {
        state.newMessageText = action.newMessageText;
    }
    return state;
}
export const sendMessageActionCreate = () => ({type: SEND_MESSAGE})

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newMessageText: text
})
export default dialogsReducer;