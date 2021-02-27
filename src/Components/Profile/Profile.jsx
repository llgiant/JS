import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   let profileImg = "https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg";
   let profileImgWidth = "800px";


    return (
        <div>
            <ProfileInfo link={profileImg} width = {profileImgWidth}/>
            <MyPosts/>
        </div>
    )
}

export default Profile;