import React, { useEffect } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/images/loginbanner.png";
import CustomButton from "../../components/button/CustomButton";
import { Logo, Eye, EyeSlash, InfoCircle } from "../../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/api-thunk/userThunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { accountSelector, authSelector } from "../../store/selector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};
// type TooltipProps = { value: string };

const Login = (props: Props) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  // local state
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailValidate, setEmailValidate] = React.useState("");
  const [passwordValidate, setPasswordValidate] = React.useState("");

  // redux
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.loading === "succeeded" && auth.user != null) {
      navigate("/");
      return;
    }

    if (auth.loading === "failed") {
      toast.error("Sai email hoặc mật khẩu!", {
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
    if (auth.error != null) {
      toast.error("Sai email hoặc mật khẩu!", {
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
  }, [auth]);
  // handler
  const handleSubmit = async () => {
    if (password.length == 0) {
      setPasswordValidate("Nhập mật khẩu!");
    }
    if (email.length == 0) {
      setEmailValidate("Nhập Email đăng nhập!");
    }
    dispatch(loginUser({ email, password }));
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

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  // mini component
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
      <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <div className="form-header">
              <Link to="/">
                <img src={Logo}></img>
              </Link>
              <p>Chào mừng trở lại</p>
            </div>
            <span>
              Bạn chưa có tài khoàn?
              <Link to={"/register"}>Đăng kí ở đây.</Link>
            </span>
            <div className="form-google">
              <CustomButton
                theme="light"
                enabled={false}
                btnText="Google login"
              />
            </div>
            <div className="divider">Hoặc</div>
            <label>Địa chỉ Email</label>
            <div className="input">
              <input
                type="text"
                placeholder="Email"
                required
                onKeyDown={(e) => handleEnter(e)}
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
                onKeyDown={(e) => handleEnter(e)}
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
                btnText="Đăng Nhập"
                onClick={() => handleSubmit()}
              />
              <Link to={""}>Bạn quên mật khẩu ?</Link>
            </div>
          </div>

          <img className="login-banner" src={loginBanner} />
        </div>
      </div>
    </>
  );
};

export default Login;
