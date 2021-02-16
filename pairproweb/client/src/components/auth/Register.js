import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as alertActions from '../../actions/alert';
import * as authActions from '../../actions/auth';
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types'
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import { connect } from 'react-redux';

// Another way to handle actions as props
// const Register = ({ setAlert, register, isAuthenticated }) => {
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2) {
      dispatch(alertActions.setAlert('Passwords do not match', 'danger'))
    } else {
      dispatch(authActions.register({ name, email, password}));
    }
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
       <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value={email}
            onChange={e => onChange(e)}
            />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  )
}

{/* Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}; */}

{/* // const mapStateToProps = state => {
//   isAuthenticated: state.auth.isAuthenticated
// } */}

{/* export default connect(null, { setAlert, register })(Register); */}

export default Register;