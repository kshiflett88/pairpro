import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const {post, loading} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPost(match.params.id))
  }, [])

  return loading || post === null ? (
      <Spinner /> 
    ) : (
      <Fragment>
        <Link to="/posts" className="btn">
          Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
      </Fragment>
    )
}

export default Post
