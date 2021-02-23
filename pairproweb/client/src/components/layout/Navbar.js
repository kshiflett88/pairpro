import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import * as authActions from '../../actions/auth';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types' 
import { logout } from '../../actions/auth';

// const Navbar = ({auth: { isAuthenticated, loading}, logout}) => {
const Navbar = () => {

  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.auth);

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          Developers
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={() => dispatch(logout())} to="/">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
      {/* <li>
        <a onClick={() => dispatch(logout())} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li> */}

    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )


  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> PairPro
        </Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  )
}

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// })


// export default connect(mapStateToProps, { logout })(Navbar);

export default Navbar;