import HomePage from "./pages/HomePage";
import AdminsListPage from "./pages/AdminsListPage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";

// import { lazy } from "react";
// const HomePage = lazy(() => import("./pages/HomePage"));
// const AdminsListPage = lazy(() => import("./pages/AdminsListPage"));
// const UsersListPage = lazy(() => import("./pages/UsersListPage"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default [
  {
    ...App,
    routes: [
      { ...HomePage, path: "/", exact: true },
      { ...UsersListPage, path: "/users" },
      { ...AdminsListPage, path: "/admins" },
      { ...PageNotFound }
    ]
  }
];
