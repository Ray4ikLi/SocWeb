import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        MessagesPage: {
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
        },
        ProfilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'Its my first post', likesCount: 4},
            ],
            newPostText: 'Enter text',
        },
        Sidebar: {
            friends: [
                {id: 1, friendName: 'Даша'},
            ]
        },
    },
    _callSubscriber() {
        console.log('asdsadas')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн = наблюдатель = обсервер // asdsad
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action)
        this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)
            this._callSubscriber(this._state)
        }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body })
export default store;

window.state = store;
//store - OOP