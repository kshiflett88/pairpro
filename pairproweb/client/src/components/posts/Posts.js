import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostForm from './PostForm';
import PostFormTwo from './PostFormTwo';

const Posts = () => {

  const {posts, loading} = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return loading ? <Spinner /> : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      {/* <PostForm /> */}
      <PostFormTwo />
      <div className="posts">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  )
}

export default Posts
