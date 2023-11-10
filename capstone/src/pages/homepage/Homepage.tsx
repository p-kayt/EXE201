import React, { useEffect } from "react";
import Hearder from "../../components/header/Hearder";
import Footer from "../../components/footer/Footer";
import "./homepage.scss";
import DropdownSearchBar from "../../components/dropdown/DropdownSearchBar";
import Button from "../../components/button/CustomButton";
import CustomButton from "../../components/button/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import {
  PurpleBackgroundCheck,
  HorizontalLine,
  Polygon,
  Calculator,
  Brain,
  Business,
  Community,
  Computer,
  Graph,
  Heart,
  IT,
  Paint,
  Physics,
  Language,
  Hat,
  Choose,
  MultipleArrow,
} from "../../assets/Icons";

import {
  GirlPicture,
  CourseCard1,
  CourseCard2,
  Hutech,
  BK,
  NgoaiThuong,
  VanLang,
  UAH,
  FPTU,
  NEU,
  ManImage,
} from "../../assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { messageSelector } from "../../store/selector";
import { setMessage } from "../../store/features/message.Slice";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const auth = useSelector(messageSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (auth.data) {
      toast.info(auth.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(setMessage(null));
    }
  }, [auth.data]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="homepage-content fade-in">
        <div className="homepage-introduction">
          <div
            className="homepage-introduction-left-content"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
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
              <DropdownSearchBar style={{ width: "70%" }} />
              <Button
                style={{ width: "30%" }}
                iconSrc=""
                enabled={true}
                btnText="Tìm Kiếm"
                theme="light"
                btnColor={"#F0631C"}
                onClick={() => handleNavigation("./course-list")}
              />
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
            data-aos="fade-left"
            data-aos-delay="1000"
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
            <img src={Hutech} data-aos="fade-up" />
            <img src={BK} data-aos="fade-up" />
            <img src={NgoaiThuong} data-aos="fade-up" />
            <img src={VanLang} data-aos="fade-up" />
            <img src={UAH} data-aos="fade-up" />
            <img src={FPTU} data-aos="fade-up" />
            <img src={NEU} data-aos="fade-up" />
          </div>
        </div>

        <div className="homepage-description">
          <div className="homepage-description-section">
            <div
              className="homepage-description-section-content"
              data-aos="fade-right"
            >
              <p className="homepage-description-section-content-title">
                Tìm kiếm gia sư <span>nhanh chóng</span>
              </p>

              <p className="homepage-description-section-content-description">
                Mạng lưới rộng lớn các gia sư đại học giàu kinh nghiệm và hiểu
                biết từ các lĩnh vực khác nhau.
              </p>

              <div className="homepage-description-section-content-valid">
                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Uy Tín</p>
                </div>

                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Phản hồi giải đáp nhanh chóng</p>
                </div>

                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Chất lượng bài học đầu tư kỹ lưỡng</p>
                </div>
              </div>

              <CustomButton
                style={{ width: "20%", textAlign: "center" }}
                btnText="Khám phá ngay"
                theme="light"
                enabled={true}
                onClick={() => handleNavigation("./course-list")}
              />
            </div>

            <div
              className="homepage-description-section-image"
              data-aos="fade-left"
            >
              <img src={CourseCard1} />
            </div>
          </div>

          <div className="homepage-description-section">
            <div
              className="homepage-description-section-image"
              data-aos="flip-up"
            >
              <img src={CourseCard2} />
            </div>

            <div
              className="homepage-description-section-content"
              style={{ marginRight: "9%" }}
              data-aos="fade-up"
            >
              <p className="homepage-description-section-content-title">
                Tìm kiếm khoá học <span>nhanh chóng</span>
              </p>

              <p className="homepage-description-section-content-description">
                Mạng lưới rộng lớn các gia sư đại học giàu kinh nghiệm và hiểu
                biết từ các lĩnh vực khác nhau.
              </p>

              <div className="homepage-description-section-content-valid">
                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Uy Tín</p>
                </div>

                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Phản hồi giải đáp nhanh chóng</p>
                </div>

                <div className="homepage-description-section-content-check">
                  <img src={PurpleBackgroundCheck} />
                  <p>Chất lượng bài học đầu tư kỹ lưỡng</p>
                </div>
              </div>

              <CustomButton
                style={{ width: "20%", textAlign: "center" }}
                btnText="Khám phá ngay"
                theme="light"
                enabled={true}
                onClick={() => handleNavigation("./course-list")}
              />
            </div>
          </div>
        </div>

        <div className="homepage-majors">
          <div className="homepage-majors-title">
            Các chuyên ngành <span>nổi bật</span>
          </div>

          <div className="homepage-majors-rows">
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Calculator} />
              Toán học & Logic
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Business} />
              Kinh doanh
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={IT} />
              Công nghệ thông tin
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Computer} />
              Khoa học máy tính
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Paint} />
              Nghệ thuật & Nhân văn
            </div>
          </div>

          <div className="homepage-majors-rows">
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Graph} />
              Khoa học dữ liệu
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Community} />
              Khoa học xã hội
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Physics} />
              Vật lý & Kỹ thuật
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Brain} />
              Phát triển cá nhân
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Heart} />
              Sức khỏe
            </div>
            <div className="homepage-majors-rows-item" data-aos="fade-up">
              <img src={Language} />
              Ngôn ngữ
            </div>
          </div>
        </div>

        <div className="homepage-experience">
          <div className="homepage-experience-content">
            <div className="homepage-experience-content-title">
              Trải nghiệm và chất lượng
            </div>

            <div className="homepage-experience-content-description">
              Zuni Tutor là một ứng dụng hết sức hữu ích và đáng giá cho việc
              thuê gia sư đại học và tìm kiếm khóa học đa dạng.
            </div>

            <div
              className="homepage-experience-content-grid"
              data-aos="fade-right"
            >
              <div className="homepage-experience-content-grid-item">
                <div className="homepage-experience-content-grid-item-title">
                  Đội ngũ gia sư
                </div>

                <div className="homepage-experience-content-grid-item-content">
                  Zuni Tutor đảm bảo chất lượng gia sư bằng cách xác minh và
                  kiểm tra kỹ lưỡng trước khi chấp nhận họ vào hệ thống.
                </div>

                <img src={Hat} />
              </div>

              <div className="homepage-experience-content-grid-item">
                <div className="homepage-experience-content-grid-item-title">
                  Đội ngũ gia sư
                </div>

                <div className="homepage-experience-content-grid-item-content">
                  Zuni Tutor đảm bảo chất lượng gia sư bằng cách xác minh và
                  kiểm tra kỹ lưỡng trước khi chấp nhận họ vào hệ thống.
                </div>

                <img src={Hat} />
              </div>

              <div className="homepage-experience-content-grid-item">
                <div className="homepage-experience-content-grid-item-title">
                  Đội ngũ gia sư
                </div>

                <div className="homepage-experience-content-grid-item-content">
                  Zuni Tutor đảm bảo chất lượng gia sư bằng cách xác minh và
                  kiểm tra kỹ lưỡng trước khi chấp nhận họ vào hệ thống.
                </div>

                <img src={Choose} />
              </div>

              <div className="homepage-experience-content-grid-item">
                <div className="homepage-experience-content-grid-item-title">
                  Đội ngũ gia sư
                </div>

                <div className="homepage-experience-content-grid-item-content">
                  Zuni Tutor đảm bảo chất lượng gia sư bằng cách xác minh và
                  kiểm tra kỹ lưỡng trước khi chấp nhận họ vào hệ thống.
                </div>

                <img src={MultipleArrow} />
              </div>
            </div>
          </div>

          <img src={ManImage} data-aos="fade-left" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
