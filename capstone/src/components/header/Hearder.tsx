import React from "react";

import { Logo, Share, Notification, Messenger } from "../../assets/Icons";
import "./header.scss";
import CustomButton from "../button/CustomButton";
import { Link } from "react-router-dom";

type headerProps = {};

type headerState = {
  checkLogIn: boolean;
};

class Hearder extends React.Component<headerProps, headerState> {
  constructor(props: headerProps) {
    super(props);

    this.state = {
      checkLogIn: true,
    };
  }

  render() {
    return (
      <div className="header">
        <div className="header-left-content">
          <div className="header-brand">
            <img className="header-brand-logo" src={Logo} />

            <p className="header-brand-name">Zuni Tutor</p>
          </div>

          <div className="header-tabs">
            <p>Tranh chủ</p>
          </div>

          <div className="header-tabs">
            <p>Học với gia sư</p>
          </div>

          <div className="header-tabs">
            <p>
              <Link to={"./course-list"}>Khóa học online</Link>
            </p>
          </div>

          <div className="header-tabs">
            <p>Về chúng tôi</p>
          </div>
        </div>

        <div className="header-right-content">
          <CustomButton
            theme="light"
            style={{ width: "120px" }}
            iconSrc={Share}
            enabled={true}
            btnText="Mời bạn"
          />

          {this.state.checkLogIn ? (
            <>
              <CustomButton
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
              />
              <CustomButton
                theme="light"
                style={{ width: "200px" }}
                enabled={true}
                imgSrc="https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg"
                imgOptions="rounded"
                imgSize={32}
                btnText="Bukayo Saka"
              />
            </>
          ) : (
            <CustomButton
              theme="light"
              style={{ width: "150px" }}
              iconSrc={Share}
              enabled={true}
              btnText="Đăng nhập"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Hearder;
