import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import Register from "./pages/register/Register.tsx";
import PhoneVerify from "./pages/register/PhoneVerify.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
    children: [
      {
        path: "/register/verify",
        element: <PhoneVerify />,
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
