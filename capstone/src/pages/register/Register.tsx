import React from "react";
import "../login/login.scss";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/images/loginbanner.png";

import { Logo, Eye, EyeSlash } from "../../assets/Icons";
import CustomButton from "../../components/button/CustomButton";
type Props = {};

const Register = (props: Props) => {
  const [passwordShown, setPasswordShown] = React.useState(false);

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <div className="form-header">
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
              <input type="text" placeholder="Tên của bạn" />
            </div>
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
                src={passwordShown ? Eye : EyeSlash}
                onClick={() => setPasswordShown(!passwordShown)}
              />
            </div>
            <div className="form-footer">
              <CustomButton
                theme="light"
                enabled={true}
                btnText="Tạo tài khoản"
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
