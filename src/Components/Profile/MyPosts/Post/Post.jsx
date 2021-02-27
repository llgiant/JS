import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPuGugpins1Lalfuj2VscKnuWUwFWbKgrfA&usqp=CAU"
                alt=""/>
            post1
            <div>
                <span>{props.message}</span>
            </div>

            <span></span>
        </div>
    </div>
}

export default Post;

