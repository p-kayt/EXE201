import React from "react";
import CustomButton from "../../components/button/CustomButton";
import "./aboutUs.scss";
import {
  AboutUsCenter1,
  AboutUsLeft,
  AboutUsRight,
  AboutUsCenter2,
  AboutUsQuality1,
  AboutUsQuality2,
  AboutUsQuality3,
} from "../../assets/Images";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <div className="aboutUs-content">
        <div className="aboutUs-tutor-register">
          <div className="aboutUs-tutor-register-title">
            Kết nối bạn và gia sư dễ dàng và học hiệu quả
          </div>

          <div className="aboutUs-tutor-register-description">
            Bạn có thể tìm kiếm vô vàn khoá học phù hợp dễ dàng
          </div>

          <CustomButton
            theme="light"
            btnText="Khám phá ngay"
            color={"#F0631C"}
            style={{ margin: "0px auto", width: "10%" }}
            onClick={() => handleNavigation("/register-tutor")}
          />

          <div className="aboutUs-tutor-register-images">
            <img src={AboutUsLeft} style={{ marginBottom: "5%" }} />
            <img src={AboutUsCenter1} style={{ marginTop: "5%" }} />
            <img src={AboutUsCenter2} style={{ marginTop: "5%" }} />
            <img src={AboutUsRight} style={{ marginBottom: "5%" }} />
          </div>
        </div>

        <div className="aboutUs-tutor-experience">
          <div className="aboutUs-tutor-experience-title">
            Những trải nghiệm và chất lượng chỉ có tại <span>Zuni Tutor</span>
          </div>

          <div className="aboutUs-tutor-experience-description">
            100% cung cấp cho tất cả học sinh
          </div>

          <div className="aboutUs-tutor-experience-images">
            <img src={AboutUsQuality1} />
            <img src={AboutUsQuality2} />
            <img src={AboutUsQuality3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
