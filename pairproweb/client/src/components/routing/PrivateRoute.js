import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// // Without hooks
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// With useSelector hook
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest}) => {

  const { isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
        <Redirect to='/login' />
        ) : (
        <Component {...props} />
        )
      } 
    />
  )
};

export default PrivateRoute;

// Without useSelector hook and using mapStateToProps and connect

// const PrivateRoute = ({ 
//   component: Component, 
//   auth: {isAuthenticated, loading}, 
//   ...rest 
//   }) => (
//     <Route {...rest} render={props => !isAuthenticated && !loading ? (
//         <Redirect to='/login' />
//         ) : (
//         <Component {...props} />
//         )
//       } 
//     />
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// export default connect(mapStateToProps)(PrivateRoute)
