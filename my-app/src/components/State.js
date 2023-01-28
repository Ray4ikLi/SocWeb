const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

    dispatch(action) {  //action = object(объект)  { type:' ADD-POST ' }
        if ( action.type === ADD_POST ) {
            let newPost = {
                id: 3,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0
            };
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state)
                } else if (action.type === UPDATE_NEW_POST_TEXT) {
                     this._state.ProfilePage.newPostText = action.newText;
                     this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;

window.state = store;
//store - OOP