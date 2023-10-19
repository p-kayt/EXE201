import React, { useEffect } from "react";
import "./userProfile.scss";
import ProfileNav from "./ProfileNav";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUser } from "../../store/api-thunk/userThunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
type Props = {};

const UserProfile = (props: Props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { ID } = useParams();

  useEffect(() => {
    dispatch(getUser({ ID }));
  }, [ID]);
  return (
    <>
      <div className="profile-container">
        <div className="profile-nav">
          <ProfileNav />
        </div>
        <div className="profile-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
