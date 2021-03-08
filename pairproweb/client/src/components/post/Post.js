import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getProfiles } from '../../actions/profile';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const {post, loading} = useSelector(state => state.post);
  const {profiles} = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(getPost(match.params.id))
    dispatch(getProfiles())
  }, [])

  return loading || post === null ? (
      <Spinner /> 
    ) : (
      <Fragment>
        <Link to="/posts" className="btn">
          Back To Posts
        </Link>
        <PostItem post={post} profiles={profiles} showActions={false} />
        <CommentForm postId={post._id} />
        <div className="comments">
          {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />
          ))}
        </div>
      </Fragment>
    )
}

export default Post
