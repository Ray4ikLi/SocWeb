import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogsReducer,
    Sidebar: sidebarReducer,
});

let store = createStore(reducers);
