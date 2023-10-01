import React from "react";
import Hearder from "../../components/header/Hearder";
import Footer from "../../components/footer/Footer";
import "./homepage.scss";
import GirlPicture from "../../assets/girl-picture-homepage.svg";
import DropdownSearchBar from "../../components/dropdown/DropdownSearchBar";
import Button from "../../components/button/Button";

const Homepage = () => {
  return (
    <>
      <Hearder />
      <div className="homepage-content">
        <div className="homepage-introduction">
          <div className="homepage-introduction-left-content">
            <div>
              Học gì đó với <span>Zuni Tutor</span>
            </div>

            <div>
            Dễ dàng kết nối với các gia sư có trình độ chuyên môn trong các môn học khác nhau. Giúp bạn đạt được mục tiêu học tập hiệu quả.
            </div>

            <div className="homepage-introduction-search-bar">
              <DropdownSearchBar/> <Button icon="" type="enable" btnText="Tìm Kiếm" theme="normal"/>
            </div>

            <div></div>
          </div>
          <img className="homepage-introduction-right-content" src={GirlPicture} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
