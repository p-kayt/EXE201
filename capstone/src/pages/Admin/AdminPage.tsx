import React, { useEffect } from "react";
import "./adminProfile.scss";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUser } from "../../store/api-thunk/userThunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
import AdminNav from "./AdminNav";
type Props = {};

const AdminPage = (props: Props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { ID } = useParams();

  useEffect(() => {
    dispatch(getUser({ ID }));
  }, [ID]);
  return (
    <>
      <div className="profile-container">
        <div className="profile-nav">
          <AdminNav />
        </div>
        <div className="profile-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
