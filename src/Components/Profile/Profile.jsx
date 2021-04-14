import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo link={props.state.profileImage.image} width = {props.state.profileImage.width}/>
            <MyPosts posts = {props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;