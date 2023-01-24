import React from "react";
import s from './Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.bg}
                 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                 alt=""/>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>

    )
}

export default ProfileInfo;