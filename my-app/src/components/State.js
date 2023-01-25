let rerenderEntireTree = () => {

 }


let state = {
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
            {id: 1, friendName:'Даша'},
        ]
    },
}

window.state = state

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.ProfilePage.newPostText,
        likesCount: 0,
    };
    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // паттерн = наблюдатель = обсервер //
}

export default state;