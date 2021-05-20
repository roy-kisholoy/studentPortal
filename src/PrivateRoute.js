import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  return (
    (localStorage.getItem("userInfo") &&
      JSON.parse(localStorage.getItem("userInfo")).authorized) ||
    false
  );
};

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
