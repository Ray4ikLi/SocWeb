import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const rootReducer = combineReducers(
    {
        MessagesPage: dialogsReducer,
        ProfilePage: profileReducer,
        Sidebar: sidebarReducer,
    }
)
 const store = configureStore({
    reducer: rootReducer
})

export default store;
