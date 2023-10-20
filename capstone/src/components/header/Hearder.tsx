import React, { useEffect, useState } from "react";
import { Logo, Share, Notification, Messenger } from "../../assets/Icons";
import "./header.scss";
import CustomButton from "../button/CustomButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
import { BlankAva } from "../../assets/Images";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const [checkLogIn, setCheckLogIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.user) {
      setCheckLogIn(true);
    } else {
      setCheckLogIn(false);
    }
  }, [auth]);

  const endOfURL = location.pathname.split("/").pop();

  const handleNavigation = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <div className="header-left-content">
        <div className="header-brand">
          <img className="header-brand-logo" src={Logo} />
          <p className="header-brand-name">Zuni Tutor</p>
        </div>
        <div
          className={endOfURL == "" ? "header-tabs-active" : "header-tabs"}
          onClick={() => handleNavigation("./")}
        >
          <p>Trang chủ</p>
        </div>
        <div
          className={
            endOfURL == "course-list" ? "header-tabs-active" : "header-tabs"
          }
          onClick={() => handleNavigation("./course-list")}
        >
          <p>Học với gia sư</p>
        </div>
        {/* <div
          className={"header-tabs"}
          onClick={() => handleNavigation("./course-list")}
        >
          <p>Khóa học online</p>
        </div> */}
        <div
          className={
            endOfURL == "about-us" ? "header-tabs-active" : "header-tabs"
          }
          onClick={() => handleNavigation("./about-us")}
        >
          <p>Về chúng tôi</p>
        </div>
      </div>

      <div className="header-right-content">
        {checkLogIn ? (
          <>
            <CustomButton
              theme="light"
              style={{ width: "120px" }}
              iconSrc=""
              enabled={true}
              btnText="0đ"
            />
            {/* <CustomButton
              theme="light"
              style={{ width: "50px" }}
              enabled={true}
              iconSrc={Notification}
            />
            <CustomButton
              theme="light"
              style={{ width: "50px" }}
              enabled={true}
              iconSrc={Messenger}
            /> */}
            <CustomButton
              theme="light"
              style={{ width: "200px" }}
              enabled={true}
              imgSrc={auth?.user?.img ? auth?.user?.img : BlankAva}
              imgOptions="rounded"
              imgSize={32}
              btnText={auth?.user?.email}
              onClick={() => handleNavigation("./profile/" + auth?.user?.Id)}
            />
          </>
        ) : (
          <CustomButton
            theme="light"
            style={{ width: "150px" }}
            iconSrc={Share}
            enabled={true}
            btnText="Đăng nhập"
            onClick={() => handleNavigation("./login")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
