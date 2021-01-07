import React from 'react';
import s from './Profile.Module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="../../images/scenery.jpg"
                alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            "My post"
            <div> new post </div>ьз
            <div className={s.item}> post1</div>
            <div className={s.item}> post2</div>
        </div>
    </div>
}

export default Profile;