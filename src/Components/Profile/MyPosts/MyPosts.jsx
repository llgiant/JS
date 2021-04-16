import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Button} from "reactstrap";


const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post id={p.id} message={p.message} likescount={p.likescount}/>
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
debugger;
    return (
        <div>
            <h3>My post</h3>
            <div className={s.postBlocks}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <br/>
                <Button color="success" onClick={addPost}>
                    Добавить пост
                </Button>

                <br/>
                <br/>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
