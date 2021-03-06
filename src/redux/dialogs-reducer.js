const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 2, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 3, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 4, name: 'Martin', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
            {id: 5, name: 'Alex', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
        ],
        messagesIncome: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'I don\'t know'},
            {id: 3, message: 'Ok bro'},
            {id: 4, message: 'U2'}
        ],
        messagesOutgoing: [
            {id: 1, message: 'Yep'},
            {id: 2, message: 'Last night'},
            {id: 3, message: 'Ok bro'},
            {id: 4, message: '5 minute'}
        ],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageText;
            return {
                ...state,
                messagesOutgoing: [...state.messagesOutgoing, {id: 5, message: newMessageText}]
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;