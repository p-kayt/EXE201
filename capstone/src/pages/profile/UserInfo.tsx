import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelector } from "../../store/selector";
import { BlankAva } from "../../assets/Images";
import CustomButton from "../../components/button/CustomButton";
import { Camera, InfoCircle } from "../../assets/Icons";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../../store/api-thunk/userThunk";

type Props = {};

const UserInfo = (props: Props) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { ID } = useParams();
  const userState = useSelector(userSelector);
  const user = userState.data;
  //
  const [fullname, setFullName] = React.useState(user?.fullName);
  const [DOB, setDOB] = React.useState(user?.dateOfBirth);
  const [email, setEmail] = React.useState(user?.email);
  const [emailValidate, setEmailValidate] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState(user?.phoneNumber);

  useEffect(() => {
    setFullName(user?.fullName), setDOB(user?.dateOfBirth);
    setEmail(user?.email);
    setPhoneNumber(user?.phoneNumber);
  }, [user]);

  const handleUpdate = () => {
    let newUser = Object.assign({}, user, {
      fullName: fullname,
      email: email,
      dateOfBirth: DOB,
      phoneNumber: phoneNumber,
    });

    dispatch(updateUser({ ID, data: newUser }));
    dispatch(getUser({ ID }));
  };

  const handleName = (e: any) => {
    setFullName(e.target.value);
  };

  const handleDOB = (e: any) => {
    const dob = e.target.value;
    let dateParts = dob.split("/");
    setDOB(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]));
  };

  const handlePhone = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmail = (e: any) => {
    // reset
    setEmailValidate("");
    //
    if (e.target.value.length > 0) {
      if (expression.test(e.target.value)) {
        setEmail(e.target.value);
      } else {
        setEmailValidate("Email không hợp lệ!");
      }
    } else {
      setEmailValidate("Nhập email đăng nhập!");
    }
  };

  const TooltipIcon = (props: any) => {
    const { value } = props;
    const [hover, setHover] = React.useState(false);
    const handleMouseIn = () => {
      setHover(true);
    };
    const handleMouseOut = () => {
      setHover(false);
    };

    return (
      <>
        <div
          className="tooltip"
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
        >
          <img src={InfoCircle} />
          {hover ? <span className="tooltip-text">{value}</span> : ""}
        </div>
      </>
    );
  };

  return (
    <>
      {userState.loading === "succeeded" ? (
        <div className="content-container">
          <h1>Thông tin cá nhân</h1>
          <div className="avatar-container">
            <img
              className="profile-pic"
              src={user?.image ? user?.image : BlankAva}
            />
            <div className="upload-btn">
              <input
                type="file"
                id="upload-hidden"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => console.log(e.target.value)}
              />
              <label htmlFor="upload-hidden">
                <CustomButton
                  theme="stripe"
                  iconSrc={Camera}
                  btnText="Thay đổi ảnh đại diện"
                />
              </label>
            </div>
          </div>
          <div className="info-item">
            <label htmlFor="fullname">Họ và tên</label>
            <div className="input">
              <input
                type="text"
                placeholder="Họ và tên"
                id="fullname"
                required
                defaultValue={fullname}
                onChange={(e) => handleName(e)}
              />
            </div>
          </div>
          <div className="info-item">
            <label htmlFor="dob">Ngày sinh</label>
            <div className="input">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                id="dob"
                required
                defaultValue={new Date(user?.dateOfBirth).toLocaleDateString(
                  "en-GB"
                )}
                onChange={(e) => handleDOB(e)}
              />
            </div>
          </div>
          <div className="info-item">
            <label htmlFor="email">Email</label>
            <div className="input">
              <input
                type="text"
                placeholder="Email"
                id="email"
                required
                defaultValue={email}
                onChange={(e) => handleEmail(e)}
              />
              {emailValidate === "" ? (
                ""
              ) : (
                <TooltipIcon value={emailValidate} />
              )}
            </div>
          </div>
          <div className="info-item">
            <label htmlFor="phone">Số điện thoại</label>
            <div className="input">
              <input
                type="text"
                placeholder="Số điện thoại"
                id="phone"
                required
                defaultValue={phoneNumber}
                onChange={(e) => handlePhone(e)}
              />
            </div>
          </div>
          <div className="info-item" style={{ display: "none" }}>
            <label htmlFor="fullname">Mật khẩu</label>
            <div className="input">
              <input
                type="text"
                placeholder=""
                id="fullname"
                required
                defaultValue={user?.password}
              />
            </div>
          </div>
          <div className="update-btn">
            <CustomButton
              style={{ fontWeight: 600 }}
              theme="stripe"
              btnText="Cập nhật thông tin"
              btnColor={"#000"}
              color={"white"}
              onClick={() => handleUpdate()}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserInfo;
