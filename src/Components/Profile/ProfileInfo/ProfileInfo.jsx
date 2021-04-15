import React from 'react';
import s from './ProfileInfo.Module.css';

const ProfileInfo = (props) => {
    return <div>
        <div>
            <img src={props.imageData.image} width={props.imageData.width} alt=""/>
        </div>
        <div className={s.descriptinBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;