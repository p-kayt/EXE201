import React from "react";
import CustomButton from "../../components/button/CustomButton";
import "./aboutUs.scss"

const AboutUs = () => {
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
            style={{width: "10%", color: "#fff !important"}}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
