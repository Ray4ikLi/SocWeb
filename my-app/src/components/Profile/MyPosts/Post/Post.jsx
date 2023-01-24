import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" alt=""/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>)
}
export default Post;