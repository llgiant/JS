import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo state={props.state.profileImage}/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}

            />
        </div>
    )
}
export default Profile;