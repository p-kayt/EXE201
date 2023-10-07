import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import eye from "../../assets/icons/eye.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg";
import loginBanner from "../../assets/images/loginbanner.png";
import Logo from "../../assets/icons/logo.svg";
import NewButton from "../../components/button/NewButton";
type Props = {};

const Login = (props: Props) => {
  const [passwordShown, setPasswordShown] = React.useState(false);

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
              Bạn chưa có tài khoàn?{" "}
              <Link to={"/register"}>Đăng kí ở đây.</Link>
            </span>
            <div className="form-google">
              <NewButton theme="light" enabled={false} btnText="Google login" />
            </div>
            <div className="divider">Hoặc</div>
            <label>Địa chỉ Email</label>
            <div className="input">
              <input type="text" placeholder="Email" />
            </div>
            <label>Mật khẩu</label>
            <div className="input">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Nhập mật khẩu"
              />
              <img
                src={passwordShown ? eye : eyeSlash}
                onClick={() => setPasswordShown(!passwordShown)}
              />
            </div>
            <div className="form-footer">
              <NewButton theme="light" enabled={true} btnText="Đăng Nhập" />
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
