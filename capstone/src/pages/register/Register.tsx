import React, { useEffect } from "react";
import "../login/login.scss";
import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/images/loginbanner.png";

import { Logo, Eye, EyeSlash, InfoCircle } from "../../assets/Icons";
import CustomButton from "../../components/button/CustomButton";
import { registerUser } from "../../store/api-thunk/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { accountSelector } from "../../store/selector";
import { ToastContainer, toast } from "react-toastify";
type Props = {};
type TooltipProps = { value: string };

const Register = (props: Props) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // local state
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameValidate, setNameValidate] = React.useState("");
  const [emailValidate, setEmailValidate] = React.useState("");
  const [passwordValidate, setPasswordValidate] = React.useState("");
  const account = useSelector(accountSelector);
  useEffect(() => {
    if (account?.loading === "succeeded" && account.message != null) {
      navigate("/login");
    }
    if (account?.loading === "failed") {
      console.log("failed");
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (account?.error != null) {
      console.log(account.error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [account]);

  // handler
  const handleSubmit = () => {
    if (password.length == 0) {
      setPasswordValidate("Nhập mật khẩu!");
    }
    if (email.length == 0) {
      setEmailValidate("Nhập Email đăng ký!");
    }
    if (name.length == 0) {
      setNameValidate("Nhập tên của bạn!");
    }
    // navigate("./verify");

    if (name.length != 0 && email.length != 0 && password.length != 0) {
      dispatch(
        registerUser({ fullName: name, email: email, password: password })
      );
    }

    console.log({ name, email, password });
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
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

  // mini component
  const TooltipIcon = (props: TooltipProps) => {
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
      <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <div className="form-header flex flex-col justify-center items-center">
              <img src={Logo}></img>
              <p>Tạo tài khoản miễn phí.</p>
            </div>
            <span>
              Bạn đã có tài khoàn? <Link to={"/login"}>Đăng nhập.</Link>
            </span>
            <div className="form-google">
              <CustomButton
                theme="light"
                enabled={false}
                btnText="Google login"
              />
            </div>
            <div className="divider">Hoặc</div>
            <label>Tên của bạn</label>
            <div className="input">
              <input
                type="text"
                placeholder="Tên của bạn"
                onChange={(e) => handleName(e)}
              />
            </div>
            <label>Địa chỉ Email</label>
            <div className="input">
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => handleEmail(e)}
              />
              {emailValidate === "" ? (
                ""
              ) : (
                <TooltipIcon value={emailValidate} />
              )}
            </div>
            <label>Mật khẩu</label>
            <div className="input">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                onChange={(e) => handlePassword(e)}
              />
              <img
                src={passwordShown ? Eye : EyeSlash}
                onClick={() => setPasswordShown(!passwordShown)}
              />
            </div>
            <div className="form-footer">
              <CustomButton
                theme="light"
                enabled={true}
                btnText="Tạo tài khoản"
                onClick={() => handleSubmit()}
              />
            </div>
          </div>

          <img className="login-banner" src={loginBanner} />
        </div>
      </div>
    </>
  );
};

export default Register;
