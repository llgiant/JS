import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Button } from "reactstrap";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likescount={p.likescount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
      debugger;
    let text = newPostElement.current.value;
   props.addPost(text);
  };

  return (
    <div>
      <h3>My post</h3>
      <div className={s.postBlocks}>
        <textarea ref={newPostElement}></textarea> <br />
        <Button color="success" onClick={addPost}>
          Add post
        </Button>
        <br />
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
