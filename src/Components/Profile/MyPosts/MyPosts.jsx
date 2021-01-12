import React from 'react';
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
        "My post"
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <Post message={'this is first param'}/>
            <Post message={'this is second param'}/>
            <Post message={'this is third param'}/>

        </div>
    </div>;
}

export default MyPosts;