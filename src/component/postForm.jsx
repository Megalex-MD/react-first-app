import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const AddNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        onChange={e => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type='body'
        placeholder='post name' />

      <MyInput
        onChange={e => setPost({ ...post, body: e.target.value })}
        value={post.body}
        // ref={inputRef}
        type='body'
        placeholder='post description' />

      <MyButton onClick={AddNewPost}>Add post</MyButton>
    </form>

  )
}
export default PostForm