import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";

const rootReducer = combineReducers(
    {
        MessagesPage: dialogsReducer,
        ProfilePage: profileReducer,
        Sidebar: sidebarReducer,
        UsersPage: userReducer,
    }
)
 const store = configureStore({
    reducer: rootReducer
})

export default store;
