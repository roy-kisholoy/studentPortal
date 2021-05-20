import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import PrivateRoute from './PrivateRoute';
import { NotificationContainer } from 'react-notifications'
// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Pages
const Login = React.lazy(() => import('./containers/Login/Login'));
const Register = React.lazy(() => import('./containers/Register/register'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NotificationContainer/>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <PrivateRoute path="/" component={DefaultLayout}/>
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
