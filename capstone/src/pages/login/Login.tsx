import React, { useEffect } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

import loginBanner from "../../assets/images/loginbanner.png";

import CustomButton from "../../components/button/CustomButton";
import { Logo, Eye, EyeSlash, InfoCircle } from "../../assets/Icons";
import { login } from "../../api/user/login";
import { VERSION, instance } from "../../api/api";
type Props = {};
type TooltipProps = { value: string };

const Login = (props: Props) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // local state
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailValidate, setEmailValidate] = React.useState("");
  const [passwordValidate, setPasswordValidate] = React.useState("");

  // handler
  const handleSubmit = async () => {
    if (password.length == 0) {
      setPasswordValidate("Nhập mật khẩu!");
    }
    if (email.length == 0) {
      setEmailValidate("Nhập Email đăng nhập!");
    }

    const data = await login(
      JSON.stringify({ email: email, password: password })
    );
    console.log(data);
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
      <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <div className="form-header">
              <img src={Logo}></img>
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
