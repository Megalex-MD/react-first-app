import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate()


  return (
    <div className='posts'>
      <div className='posts__content'>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="posts__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} className='posts__btn'>Open</MyButton>
        <MyButton onClick={() => props.remove(props.post)} className='posts__btn'>Delete</MyButton>
      </div>
    </div>
  )
}

export default PostItem