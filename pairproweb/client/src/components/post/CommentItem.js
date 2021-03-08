import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: {_id, text, name, avatar, user, date}
}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img
            className={avatar ? "post-profile-img" : "imgLogo post-profile-img my-1"}
            src={`https://pair-pro-app.s3-us-west-1.amazonaws.com/media/${avatar}`}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">
          {text}
        </p>
          <p className="post-date">
            <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button onClick={e => dispatch(deleteComment(postId, _id))} type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

export default CommentItem
