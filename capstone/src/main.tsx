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
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import AuthRoutes from "./components/route/AuthRoutes.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import RegisterTutor from "./pages/RegisterTutor/RegisterTutor.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Homepage />,
  //     },
  //     {
  //       path: "/course-list",
  //       element: <CoursesList />,
  //     },
  //     {
  //       path: "/example",
  //       element: <TempComponent />,
  //     },
  //     {
  //       path: "/about-us",
  //       element: <AboutUs />,
  //     },
  //     {
  //       path: "/register-tutor",
  //       element: <RegisterTutor />,
  //     },
  //   ],
  // },
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
  {
    element: <AuthRoutes />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: "/course-list",
            element: <CoursesList />,
          },
          {
            path: "/example",
            element: <TempComponent />,
          },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/register-tutor",
            element: <RegisterTutor />,
          },
        ],
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
