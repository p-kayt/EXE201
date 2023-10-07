import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Share from "../../assets/icons/share.svg";
import Notification from "../../assets/icons/notification.svg";
import Messenger from "../../assets/icons/messenger.svg";

import "./header.scss";
import NewButton from "../button/NewButton";

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
            <p>Khóa học online</p>
          </div>

          <div className="header-tabs">
            <p>Về chúng tôi</p>
          </div>
        </div>

        <div className="header-right-content">
          <NewButton
            theme="light"
            style={{ width: "120px" }}
            iconSrc={Share}
            enabled={true}
            btnText="Mời bạn"
          />

          {this.state.checkLogIn ? (
            <>
              <NewButton
                theme="light"
                style={{ width: "50px" }}
                enabled={true}
                iconSrc={Notification}
              />
              <NewButton
                theme="light"
                style={{ width: "50px" }}
                enabled={true}
                iconSrc={Messenger}
              />
              <NewButton
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
            <NewButton
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
