import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import Register from "./pages/register/Register.tsx";
import Verify from "./pages/register/Verify.tsx";
import CoursesList from "./pages/courses/CoursesList.tsx";
import TempComponent from "./pages/TempComponent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/course-list",
        element: <CoursesList />,
      },
      {
        path: "/example",
        element: <TempComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        path: "/register/verify",
        element: <Verify />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
