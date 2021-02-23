import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = props => {

  const dispatch = useDispatch();
  const { profiles, loading } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(getProfiles())
  }, [])

  return (
    <Fragment>
      { loading ? <Spinner /> : <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : <h4>No profiles found...</h4>}
          </div>
        </Fragment>}
    </Fragment>
  )
}

export default Profiles
