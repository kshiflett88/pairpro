import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

// React-redux hooks
import { useSelector, useDispatch } from 'react-redux';
import * as profileActions from '../../actions/profile';


// Without react-redux hooks
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getCurrentProfile } from '../../actions/profile';

const Dashboard = () => {
  
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { profile, loading } = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(profileActions.getCurrentProfile())
  }, [])

  return loading && profile === null ? 
    <Spinner /> : 
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className="lead">
      <i className="fas fa-user"></i> Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
}

export default Dashboard;

// Without react-redux hooks
// const Dashboard = ({getCurrentProfile, auth, profile }) => {
  
//   useEffect(() => {
//     getCurrentProfile()
//   }, [])

//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
//   profile: state.profile
// })

// export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
