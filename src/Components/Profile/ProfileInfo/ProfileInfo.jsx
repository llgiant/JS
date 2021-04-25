import React from 'react';
import s from './ProfileInfo.Module.css';

const ProfileInfo = (props) => {
    return <div>
        <div>
            <img src={props.state.image} width={props.state.width} alt=""/>
        </div>
    </div>
}

export default ProfileInfo;