import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/postService";
import Loader from "../component/UI/loading/loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchCommById, isCommLoading, commError] = useFetching(async (id) => {
    const response = await PostService.getCommById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchCommById(params.id)
  }, [])

  return (
    <div>
      <h1>Current post is: {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
      <h2 style={{ marginTop: 15 }}>COMMENTS</h2>
      {isCommLoading
        ? <Loader />
        : <div>
          {comments.map(comm =>
            < div
              key={comm.id}
              style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div >
  )
}

export default PostIdPage