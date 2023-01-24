import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');

    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea  onChange={onChangePost} className={s.textarea} ref={newPostElement}
                                   value={props.newPostText}/>
                    </div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;
