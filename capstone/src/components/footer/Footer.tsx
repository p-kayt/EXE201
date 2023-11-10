import "./footer.scss";
import React from "react";
import {
  Logo,
  Flame,
  Sms,
  Facebook,
  Instagram,
  Twitch,
  Youtube,
} from "../../assets/Icons";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer-container">
        <div className="email-sub">
          <span className="motiv">
            <img src={Flame}></img>
            Đăng ký để nhận ưu đãi sớm nhất
          </span>
          <div className="input-field">
            <div className="input">
              <img src={Sms} />
              <input type="text" placeholder="Nhập địa chỉ email của bạn" />
            </div>
            <div className="btn-submit">
              <CustomButton theme="stripe" enabled={true} btnText="Gửi" />
            </div>
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
                <Link to="https://www.facebook.com/profile.php?id=61551834059069&mibextid=LQQJ4d">
                  <img src={Facebook} />
                </Link>
                <img src={Instagram} />
                <img src={Twitch} />
                <img src={Youtube} />
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
