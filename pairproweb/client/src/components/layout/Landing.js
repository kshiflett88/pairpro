import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = () => {
// const Landing = ({ isAuthenticated }) => {

  const {isAuthenticated} = useSelector(state => state.auth)

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to Pair Pro</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts about a project you are working on and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Landing; 


// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool,
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps)(Landing); 