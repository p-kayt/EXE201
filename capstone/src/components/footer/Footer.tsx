import Button from "../button/Button";
import "./footer.scss";
import React from "react";
import flame from "../../assets/icons/Flame.svg";
import Logo from "../../assets/icons/logo.svg";
import sms from "../../assets/icons/sms.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/instagram.svg";
import twitch from "../../assets/icons/twitch.svg";
import youtube from "../../assets/icons/youtube.svg";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer-container">
        <div className="email-sub">
          <span className="motiv">
            <img src={flame}></img>
            Đăng ký để nhận ưu đãi sớm nhất
          </span>
          <div className="input-field">
            <div className="input">
              <img src={sms} />
              <input type="text" placeholder="Nhập địa chỉ email của bạn" />
            </div>
            <Button theme="stripe" type="enable" icon={""} btnText="Gửi" />
          </div>
        </div>
        <div className="bottom-half">
          <div className="info">
            <div className="quote">
              <div className="footer-brand">
                <img className="footer-brand-logo" src={Logo} />
                <span className="footer-brand-name">Zuni Tutor</span>
              </div>
              <div className="slogan">
                Lan tỏa kiến thức đến mọi nẻo đường Việt Nam. Đặt nền móng cho
                sự truyền tải tri thức và thúc đẩy sự nghiệp toàn cầu.
              </div>
              <div className="social">
                <img src={facebook} />
                <img src={insta} />
                <img src={twitch} />
                <img src={youtube} />
              </div>
            </div>

            <div className="footer-nav">
              <div className="col">
                <a>Trang chủ</a>
                <a>Học với gia sư</a>
                <a>Khóa học online</a>
              </div>
              <div className="col">
                <a>Giải pháp</a>
                <a>Tìm gia sư</a>
                <a>Bạn học online</a>
              </div>
              <div className="col">
                <a>Về chúng tôi</a>
                <a>Giới thiệu</a>
                <a>Liên hệ</a>
                <a>Hợp tác</a>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="copy-right">
            © 2023 Zuni Tutor. Đã đăng ký bản quyền.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
