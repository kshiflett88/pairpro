import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import { getProfiles } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import PostForm from './PostForm';
import PostFormTwo from './PostFormTwo';
import { getProfileById } from '../../actions/profile';

const Posts = () => {

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getProfiles())
  }, [])
  
  const {posts, loading} = useSelector(state => state.post);
  const {profiles} = useSelector(state => state.profile)
  const dispatch = useDispatch();


  //user._id === posts.user


  return loading ? <Spinner /> : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      {/* <PostForm /> */}
      <PostFormTwo />
      <div className="posts">
        {posts.map(post => {
          return <PostItem key={post._id} post={post} profiles={profiles} />
        })}
      </div>
    </Fragment>
  )
}

export default Posts
