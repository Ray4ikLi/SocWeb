import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.ProfilePage.posts}
                     newPostText={props.ProfilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;