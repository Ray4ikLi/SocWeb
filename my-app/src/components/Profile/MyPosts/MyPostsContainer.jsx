import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onChangePost = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <MyPosts updateNewPostText={onChangePost}
                 addPost={addPost}
                 posts={state.ProfilePage.posts}
                 newPostText={state.ProfilePage.newPostText}/>
    )
}
export default MyPostsContainer;
