import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Button} from "reactstrap";


const MyPosts = (props) => {
    let postsElements = props.state.posts.map((p) => (
        <Post id={p.id} message={p.message} likescount={p.likescount}/>
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',text:text});
    }
    return (
        <div>
            <h3>My posts</h3>
            <div className={s.postBlocks}>
                <textarea
                    onChange={onPostChange} ref={newPostElement}
                    value={props.state.newPostText}
                />
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
