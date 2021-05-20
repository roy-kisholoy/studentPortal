import React from "react";

const Profile = React.lazy(() => import("./containers/Profile/Profile"));
const Login = React.lazy(() => import("./containers/Login/Login"));

const routes = [
  { path: "/dashboard", exact: true, name: "Profile", component: Profile },
  { path: "/add", exact: true, name: "Profile", component: Login },
  { path: "/edit", exact: true, name: "Profile", component: Profile },
];

export default routes;
