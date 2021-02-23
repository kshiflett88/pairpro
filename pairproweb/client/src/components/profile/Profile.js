import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';



const Profile = ({ match }) => {

  const dispatch = useDispatch();
  const { profile, loading } = useSelector(state => state.profile);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getProfileById(match.params.id))
  },[])

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner /> ) : (
        <Fragment>
          <Link to='/profiles' className="btn btn-light">Back To Profiles</Link>
          { auth.isAuthenticated && 
            auth.loading === false && 
            auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className="btn btn-dark">
              Edit Profile
            </Link>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}


export default Profile;
