import React from "react";
import Hearder from "../../components/header/Hearder";
import Footer from "../../components/footer/Footer";
import "./homepage.scss";
import GirlPicture from "../../assets/images/Frame-48097841.png";
import DropdownSearchBar from "../../components/dropdown/DropdownSearchBar";
import Button from "../../components/button/Button";
import HorizontalLine from "../../assets/icons/Horizontal-line.svg";
import Polygon from "../../assets/icons/polygon-(matic).svg";
import Hutech from "../../assets/images/hutechlogo.png";
import BK from "../../assets/images/bklogo.png";
import NgoaiThuong from "../../assets/images/ngoaithuonglogo.png";
import VanLang from "../../assets/images/vl-PhotoRoom.png";
import UAH from "../../assets/images/UAH.png";
import FPTU from "../../assets/images/FPTU.png";
import NEU from "../../assets/images/NEU.png";

const Homepage = () => {
  return (
    <>
      <Hearder />
      <div className="homepage-content">
        <div className="homepage-introduction">
          <div className="homepage-introduction-left-content">
            <div className="homepage-introduction-heading">
              Học gì đó với{" "}
              <span className="homepage-introduction-heading-brand">
                Zuni Tutor
              </span>
            </div>

            <div className="homepage-introduction-description">
              Dễ dàng kết nối với các gia sư có trình độ chuyên môn trong các
              môn học khác nhau. Giúp bạn đạt được mục tiêu học tập hiệu quả.
            </div>

            <div className="homepage-introduction-search-bar">
              <DropdownSearchBar />{" "}
              <Button icon="" type="enable" btnText="Tìm Kiếm" theme="normal" />
            </div>

            <div className="homepage-introduction-stats">
              <div>
                <span className="homepage-introduction-stats-number">550+</span>
                <br />
                Môn học đa dạng
              </div>
              <img src={HorizontalLine} />
              <div>
                <span className="homepage-introduction-stats-number">550+</span>
                <br />
                Môn học đa dạng
              </div>
            </div>
          </div>
          <img
            className="homepage-introduction-right-content"
            src={GirlPicture}
          />
        </div>

        <div className="homepage-association">
          <div className="homepage-association-heading">
            <img src={Polygon} />
            Chúng tôi hợp tác với các tổ chức giáo dục uy tín
          </div>

          <div className="homepage-association-content">
            <img src={Hutech} />
            <img src={BK} />
            <img src={NgoaiThuong} />
            <img src={VanLang} />
            <img src={UAH} />
            <img src={FPTU} />
            <img src={NEU} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
