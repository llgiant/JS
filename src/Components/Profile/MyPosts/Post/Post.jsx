import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPuGugpins1Lalfuj2VscKnuWUwFWbKgrfA&usqp=CAU"
                alt=""/>
            <span>{props.message}</span>
            <div>
                <span>likes: {props.likescount}</span>
            </div>


        </div>
    </div>
}

export default Post;

