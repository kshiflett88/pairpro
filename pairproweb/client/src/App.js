import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Alert from './components/layout/Alert';
// import Dashboard from './components/dashboard/Dashboard';
// import PrivateRoute from './components/routing/PrivateRoute';
// import CreateProfile from './components/profile-form/CreateProfile';
// import EditProfile from './components/profile-form/EditProfile';
// import AddExperience from './components/profile-form/AddExperience';
// import AddEducation from './components/profile-form/AddEducation';
// import Profiles from './components/profiles/Profiles';
// import Profile from './components/profile/Profile';
// import Posts from './components/posts/Posts';
// import Post from './components/post/Post';
// import NotFound from './components/layout/NotFound';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
    setAuthToken(localStorage.token)
}


//Everything has a class of container to push everything to middle
//Landing page doesnt have that cause want it to go all the way to the edge

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
