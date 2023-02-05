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
};

const dialogsReducer = (state = initialState, action) => {

    switch ( action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.MessagesData = [...state.MessagesData, {id: 5, message: body}]
            return stateCopy;
        }
        default:
            return state;
    }
}



export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;