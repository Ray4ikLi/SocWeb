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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('asdsadas')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0,
        };
        this._state.ProfilePage.posts.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн = наблюдатель = обсервер // asdsad
    }

}

export default store;

window.state = store;
//store - OOP