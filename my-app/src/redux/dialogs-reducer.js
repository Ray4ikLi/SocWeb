const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    MessagesData: [
        {id: 1, message: 'Ку-ку'},
        {id: 2, message: 'Я гуль'},
        {id: 3, message: 'Шиза'},
    ],
    DialogsData: [
        {id: 1, name: 'Ярик'},
        {id: 2, name: 'Даша'},
        {id: 3, name: 'Паша'},
        {id: 4, name: 'Максим'},
    ],
    newMessageBody: '',
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessagesData.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;