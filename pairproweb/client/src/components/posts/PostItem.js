import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import {addLike, removeLike, deletePost } from '../../actions/post';
import { getProfileById } from '../../actions/profile';

const PostItem = ({ post: {_id, title, text, tech, group, name, avatar, user, likes, comments, date}, profiles, showActions=true}) => {

  const [image, setImage] = useState('')
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  // const {profile} = useSelector(state => state.profile)


  useEffect(() => {
    profiles.map(profile => {
      if (profile.user._id == user) {
        setImage(profile.avatar)
      }
    })
  },[])

  return (
    <Fragment>
      <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              {/* <img
                className="round-img"
                // src={avatar}
                src={`https://pair-pro-app.s3-us-west-1.amazonaws.com/media/${image}`}
                alt=""
              /> */}
              <img
                className={image ? "post-profile-img my-1" : "imgLogo post-profile-img my-1"}
                src={`https://pair-pro-app.s3-us-west-1.amazonaws.com/media/${image}`}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <h2>{title}</h2>
            <div className="tech">
              <p className="tech-p">Tech Stack: </p>
              {tech.map((skill, index) => (
                <div key={index} className="tech-p"><i className=""></i>{skill}</div>
              ))}
            </div>  
            <p className="my-1">
              Number of Devs needed: {group}
            </p>  
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
            {showActions && 
              <Fragment>
                <button onClick={e => dispatch(addLike(_id))} type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-up"></i>{' '}
                  <span>{likes.length > 0 && (<span>{likes.length}</span>)}</span>
                </button>
                <button onClick={e => dispatch(removeLike(_id))} type="button" className="btn btn-light">
                  <i className="fas fa-thumbs-down"></i>
                </button>
                <Link to={`/posts/${_id}`} className="btn btn-primary">
                  Discussion {comments.length > 0 && (
                    <span className='comment-count'>{comments.length}</span>
                  )}
                </Link>
                {!auth.loading && user === auth.user._id && (
                  <button onClick={e => dispatch(deletePost(_id))} type="button" className="btn btn-danger">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </Fragment>
            }
          </div>
        </div>
    </Fragment>
  )
}

export default PostItem;
