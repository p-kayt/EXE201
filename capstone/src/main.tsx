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
import UserProfile from "./pages/profile/UserProfile.tsx";
import UserInfo from "./pages/profile/UserInfo.tsx";
import Wallet from "./pages/profile/Wallet.tsx";
import UserCourses from "./pages/profile/user/UserCourses.tsx";
import FavCourses from "./pages/profile/user/FavCourses.tsx";
import LearnedCourses from "./pages/profile/user/LearnedCourses.tsx";
import CreatedCourses from "./pages/profile/tutor/CreatedCourses.tsx";
import Statistics from "./pages/profile/tutor/Statistics.tsx";
import TopUp from "./pages/topup/TopUp.tsx";
import CourseDetail from "./pages/CourseDetail/CourseDetail.tsx";
import AdminPage from "./pages/Admin/AdminPage.tsx";
import PrivateRoutes from "./components/route/PrivateRoute.tsx";
import BuyPage from "./pages/buypage/BuyPage.tsx";
import Dashboard from "./pages/Admin/Dashboard/Dashboard.tsx";
import UserManagement from "./pages/Admin/UserManagement.tsx";
import TransactionManagement from "./pages/Admin/Transaction management/TransactionManagement.tsx";
import AdminStatistics from "./pages/profile/admin/AdminStatistics.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/course-list",
        element: <CoursesList />,
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
            // element: <PrivateRoutes />,
            children: [
              {
                path: "/admin",
                element: <AdminPage />,
                children: [
                  { index: true, element: <Dashboard /> },
                  {
                    path: "/admin/userManagement",
                    element: <UserManagement />,
                  },
                  {
                    path: "/admin/transactionManagement",
                    element: <TransactionManagement />,
                  },
                ],
              },
            ],
          },

          {
            index: true,
            element: <Homepage />,
          },
          {
            path: "/course-list",
            element: <CoursesList />,
          },
          {
            path: "/course-list/:courseId/",
            element: <CourseDetail />,
          },
          { path: "/course-list/:courseId/buy", element: <BuyPage /> },
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
          {
            path: "/top-up",
            element: <TopUp />,
          },
          {
            path: "/profile/:ID/",
            element: <UserProfile />,
            children: [
              { index: true, element: <UserInfo /> },
              { path: "/profile/:ID/wallet", element: <Wallet /> },
              { path: "/profile/:ID/my-courses", element: <UserCourses /> },
              {
                path: "/profile/:ID/learned-course",
                element: <LearnedCourses />,
              },
              {
                path: "/profile/:ID/favorite-courses",
                element: <FavCourses />,
              },
              // tutor
              {
                path: "/profile/:ID/created-courses",
                element: <CreatedCourses />,
              },
              {
                path: "/profile/:ID/statistics",
                element: <Statistics />,
              },
              {
                path: "/profile/:ID/admin/statistics",
                element: <AdminStatistics />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
