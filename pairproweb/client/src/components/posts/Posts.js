import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';

const Posts = () => {

  const {posts, loading} = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Fragment>
      
    </Fragment>
  )
}

export default Posts
