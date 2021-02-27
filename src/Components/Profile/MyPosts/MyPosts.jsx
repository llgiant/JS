import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
    return <div>
        <h3>My post</h3>
        <div className={s.postBlocks}>
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