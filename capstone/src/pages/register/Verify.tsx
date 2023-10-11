import React, { useEffect, useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/images/loginbanner.png";

import { Logo, Eye, EyeSlash, ArrowLeft } from "../../assets/Icons";
import CustomButton from "../../components/button/CustomButton";
type Props = {};
type CountdownProps = {
  isRunning: boolean;
  setIsRunning: (params: any) => any;
};
const Verify = (props: Props) => {
  const [code, setCode] = React.useState("");
  const [startCounting, setStartCounting] = React.useState(false);

  const handleSubmit = () => {
    console.log("verify code");
  };
  const handleSendCode = () => {
    setStartCounting(true);
  };
  const handleCode = (e: any) => {
    setCode(e.target.value);
  };

  // mini component
  const Countdown = (props: CountdownProps) => {
    const { isRunning, setIsRunning } = props;
    const [timeCounter, setTimeCounter] = React.useState(59);
    useEffect(() => {
      timeCounter > 0 &&
        setTimeout(() => setTimeCounter(timeCounter - 1), 1000);
      if (timeCounter == 0) {
        setIsRunning(false);
      }
    }, [isRunning, timeCounter]);
    return <span style={{ color: "#00000080" }}>{timeCounter}s</span>;
  };
  return (
    <>
      <div className="verify-container">
        <div className="verify-card">
          <div className="verify-form">
            <Link className="goback" to={"/register"}>
              <img src={ArrowLeft} />
              <p style={{ fontSize: "20px" }}>Trở về</p>
            </Link>
            <div className="form-header">
              <p>Xác thực Email</p>
            </div>
            <span style={{ width: "66%", textAlign: "left" }}>
              Giúp chúng tôi giữ tính an toàn và bảo mật tài khoản của bạn.
              <Link to={""}>Tìm hiểu</Link>
            </span>
            <label>Mã xác thực</label>
            <div className="input">
              <input
                type="text"
                placeholder="Mã xác thực"
                onChange={(e) => handleCode(e)}
              />
              {startCounting ? (
                <Countdown
                  isRunning={startCounting}
                  setIsRunning={setStartCounting}
                />
              ) : (
                <span
                  style={{ width: "100px", cursor: "pointer" }}
                  onClick={() => handleSendCode()}
                >
                  Gửi mã
                </span>
              )}
            </div>
            <div className="form-footer">
              <CustomButton
                theme="light"
                enabled={true}
                btnText="Xác thực"
                onClick={() => handleSubmit()}
              />
            </div>
            <span>
              Bạn đã có tài khoàn? <Link to={"/login"}>Đăng nhập.</Link>
            </span>
          </div>

          <img className="login-banner" src={loginBanner} />
        </div>
      </div>
    </>
  );
};

export default Verify;
