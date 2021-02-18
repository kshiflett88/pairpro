import React, { useEffect } from 'react';

// React-redux hooks
import { useSelector, useDispatch } from 'react-redux';
import * as profileActions from '../../actions/profile';


// Without react-redux hooks
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getCurrentProfile } from '../../actions/profile';

const Dashboard = () => {
  
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const profile = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(profileActions.getCurrentProfile())
  }, [])

  return (
    <div>
      Dashboard
    </div>
  )
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
