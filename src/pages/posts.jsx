import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/postService';
import PostForm from '../component/postForm';
import PostList from '../component/postList';
import MyButton from '../component/UI/button/MyButton';
import Loader from '../component/UI/loading/loader';
import MyModal from '../component/UI/myModal/myModal';
import Pagination from '../component/UI/pagination/pagination';
import PostFilter from '../component/UI/postFilter';
import MySelect from '../component/UI/select/MySelect';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import { getPagesCount } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const pageChange = (page) => {
    setPage(page)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='app'>
      <MyButton onClick={() => setModal(true)}>Add post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Numbers of elements'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'All posts' },
        ]}
      />

      {postError &&
        <h1>Error ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSerchedPosts} title='POST TITLE I' />
      <div ref={lastElement} style={{ height: 10 }} />
      {isPostsLoading && < Loader />}
      <Pagination
        page={page}
        totalPages={totalPages}
        pageChange={pageChange}
      />
    </div >
  )
}
export default Posts;

