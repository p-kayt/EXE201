import React, { useEffect } from "react";
import "./userProfile.scss";
import ProfileNav from "./ProfileNav";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../store/api-thunk/userThunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { authSelector } from "../../store/selector";
type Props = {};

const UserProfile = (props: Props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { ID } = useParams();
  const auth = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (ID === auth.user.Id) {
      dispatch(getUser({ ID }));
    } else {
      navigate("../error");
    }
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
