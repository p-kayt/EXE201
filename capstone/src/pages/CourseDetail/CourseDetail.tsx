import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlankAva, CourseImg } from "../../assets/Images";
import { Arrow, Calendar, Clock, Hat, Verify } from "../../assets/Icons";
// import { data } from "./data";
import "./courseDetail.scss";
import Avatar from "../../components/avatar/Avatar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import { utcToZonedTime } from "date-fns-tz";
import { format } from "date-fns";

const CourseDetail = () => {
  let { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [classType, setClassType] = useState("5-15");
  const [course, setCourse] = useState({
    "courseName": "string",
    "duration": 0,
    "totalWeek": 0,
    "teachingType": "Online",
    "startDate": "2023-11-03T02:11:03.000Z",
    "endDate": "2023-11-03T02:11:03.000Z",
    "coursePrice": 0,
    "description": "string",
    "syllabusFile": "string",
    "courseSampleVideo": "string",
    "totalStudent": 0,
    "avgRating": 0,
    "allowJoiningClass": "Yes",
    "courseType": "Lecture",
    "courseFile": "string",
    "courseStatus": "Draft",
    "classLocation": "string",
    "creationDate": "2023-11-03T02:11:03.000Z",
    "createdBy": 0,
    "tutorId": 0,
    "universityId": 0,
    "courseMajorId": 0,
    "units": [
      {
        "unitName": "string",
        "minuteTime": 0,
        "content": "string",
        "homeWorkFile": "string",
        "teachingMaterialFile": "string"
      }
    ],
    "universities": {
      "universityName": "string",
      "universityArea": "Urban"
    },
    "courseMajor": {
      "courseMajorName": "string"
    }
  });

  useEffect(() => {
    fetch("https://zunitutor.azurewebsites.net/api/TeachingCourse/" + courseId)
      .then((response) => response.json())
      .then((result) => {
        setCourse(result.result[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(course);

  const convertToVNTime = (timestamp: string): string => {
    const timeZone = "Asia/Ho_Chi_Minh";

    const date = new Date(timestamp);

    const zonedDate = utcToZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, "dd/MM");

    return formattedDate;
  };

  const handleBuy = () => {
    toast.error("Số dư không đủ để thanh toán !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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

      <div className="tutor-detail-content">
        <div className="left">
          <div className="tutor-detail-header">
            <img src={CourseImg} className="course-image" />

            <div className="information">
              <div className="title">{course?.courseName}</div>

              <div className="user">
                <Avatar type="rounded" size={32} source={BlankAva} />
                {/* {course?.Fullname} */}
                Lê Thị Dung
                <img src={Verify} />
              </div>

              <div>
                <div className="student">
                  <div>Học viên</div>
                  <span>{course?.totalStudent}</span>
                </div>
              </div>
            </div>

            <div className="buttons"></div>
          </div>

          <div className="tabs">
            <a
              href="#description"
              className="tab"
              style={{
                borderRight: "2px solid black",
                borderRadius: "8px 0px 0px 8px",
              }}
              onClick={() => setActiveTab("description")}
            >
              Giới thiệu
            </a>
            <a
              href="#sample-video"
              className="tab"
              style={{ borderRight: "2px solid black" }}
              onClick={() => setActiveTab("sample-video")}
            >
              Video dạy thử
            </a>
            {/* <a
                  href="#teaching-style"
                  className="tab"
                  style={{ borderRight: "2px solid black" }}
                  onClick={() => setActiveTab("teaching-style")}
                >
                  Phong cách dạy
                </a> */}

            {course?.units?.length === 0 ? (
              ""
            ) : (
              <a
                href="#syllabus"
                className="tab"
                // style={{ borderRight: "2px solid black" }}
                onClick={() => setActiveTab("syllabus")}
              >
                Giáo trình
              </a>
            )}

            {/* <a
                  href="#"
                  className="tab"
                  style={{ borderRadius: "0px 8px 8px 0px" }}
                  onClick={() => setActiveTab('description')}
                >
                  Đánh giá
                </a> */}
          </div>

          <div className="description" id="description">
            <span>Giới thiệu</span>

            {course?.description}
          </div>

          <div className="sample-video" id="sample-video">
            <span>Video dạy thử</span>

            <div className="aspect-ratio-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Z45SyobqbTI?si=iPUqa6VgbKlkvvxw&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* <div className="teaching-style" id="teaching-style">
                <span>Phong cách dạy</span>

                {course?.TeachingStyle}
              </div> */}

          {course?.units?.length === 0 ? (
            ""
          ) : (
            <div className="syllabus" id="syllabus">
              <span>Giáo trình</span>

              <div className="syllabus-detail">
                {course?.units?.map((unit, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<img src={Arrow} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{unit.unitName}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{unit.content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="right">
          <div className="price-information">
            <div>Giá</div>

            <div className="price">
              {/* <span className="old-price">
                    1.000.000 đ <br />
                  </span> */}

              <span className="new-price">{course?.coursePrice} đ</span>
            </div>
          </div>

          <div className="line" />

          <div className="buy-select">
            <div className="title">Số lượng học viên</div>

            <div className="tabs">
              <div
                className={`tab ${classType == "5-15" ? "active" : ""}`}
                style={{
                  borderRight: "2px solid black",
                  borderRadius: "8px 0px 0px 8px",
                }}
                onClick={() => setClassType("5-15")}
              >
                5 - 15
              </div>
              <div
                className={`tab ${classType == "1-1" ? "active" : ""}`}
                onClick={() => setClassType("1-1")}
              >
                1 - 1
              </div>
            </div>

            <CustomButton
              theme="light"
              btnColor={"#F0631C"}
              btnText="Thuê ngay"
              color={"#fff"}
              onClick={() => {
                handleBuy();
              }}
            />
          </div>

          <div className="class-duration">
            <div>
              <img src={Calendar} />
              Dạy trong {course?.totalWeek} tuần
            </div>
            <div>
              <img src={Clock} />
              {course?.duration} giờ mỗi buổi
            </div>
          </div>

          <div className="teaching-type">
            <div className="title">Phương pháp dạy</div>

            <div className="detail">{course?.teachingType}</div>
          </div>

          <div className="class-date-time">
            <div className="title">Thời gian và lớp đang mở</div>

            <div className="class">
              <div className="class-infomation">
                <div className="class-name">
                  <img src={Hat} />
                  {course?.classLocation}
                </div>

                <div>
                  {course?.startDate
                    ? convertToVNTime(course?.startDate)
                    : "N/A"}{" "}
                  - {course?.endDate ? convertToVNTime(course?.endDate) : "N/A"}
                  /2023
                </div>
              </div>

              {/* <div className="class-schedule" key={index}>
                        {time}
                      </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
