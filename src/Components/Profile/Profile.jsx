import React from 'react';
import s from './Profile.Module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src="https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;