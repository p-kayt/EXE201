import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { instance } from "../../api/api";
import { authSelector, userSelector } from "../../store/selector";
import { useSelector } from "react-redux";



const CourseOverview = () => {
  let { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const [classType, setClassType] = useState("5-15");
  const user = useSelector(authSelector);
  const [isPaid, setIsPaid] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [tutor, setTutor] = useState({
    id: 0,
    fullName: "string",
    email: "string",
    password: "string",
    dateOfBirth: "string",
    phoneNumber: "string",
    accountStatus: "string",
    image: "string",
    joinDate: "string",
    selfDecription: "string",
    createdAt: "string",
  });
  const [course, setCourse] = useState({
    courseName: "string",
    duration: 0,
    totalWeek: 0,
    teachingType: "Online",
    startDate: "2023-11-03T02:11:03.000Z",
    endDate: "2023-11-03T02:11:03.000Z",
    coursePrice: 0,
    description: "string",
    syllabusFile: "string",
    courseSampleVideo: "string",
    totalStudent: 0,
    avgRating: 0,
    allowJoiningClass: "Yes",
    courseType: "Lecture",
    courseFile: "string",
    courseStatus: "Draft",
    classLocation: "string",
    creationDate: "2023-11-03T02:11:03.000Z",
    createdBy: 0,
    tutorId: 0,
    universityId: 0,
    courseMajorId: 0,
    CourseImageURL:'string',
    units: [
      {
        unitName: "string",
        minuteTime: 0,
        content: "string",
        homeWorkFile: "string",
        teachingMaterialFile: "string",
      },
    ],
    universities: {
      universityName: "string",
      universityArea: "Urban",
    },
    courseMajor: {
      courseMajorName: "string",
    },
  });

  const handleNavigation = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course details
        const courseResponse = await instance.get("/api/TeachingCourse/GetById?id=" + courseId);
        setCourse(courseResponse.data.result);
  
        // Fetch student details
        const studentResponse = await instance.get("/api/Student/GetById?id=" + user.user.Id);
        setStudentId(studentResponse.data.result.id);
  
        // Fetch order details using the student ID from the response directly
        const orderResponse = await instance.get("/api/Order/GetByStudentId?id=" + studentResponse.data.result.id);
        orderResponse?.data?.result.forEach((item:any) => {
          if (item.orderDetails[0].teachingCourseId == courseId && item.orderStatus === "AlreadyPaid") {
            setIsPaid(true);
          }
        });
      } catch (error) {
        console.error("An error occurred while fetching data", error);
      }
    };
  
    fetchData();
  }, [courseId, user.user.Id]);

  console.log(isPaid)


  useEffect(() => {
    if (course.tutorId) {
      instance.get("/api/User/Info?id=" + course.tutorId).then((res) => {
        setTutor(res.data.result);
      });
    }
  }, [course.tutorId]);


  const convertToVNTime = (timestamp: string): string => {
    const timeZone = "Asia/Ho_Chi_Minh";

    const date = new Date(timestamp);

    const zonedDate = utcToZonedTime(date, timeZone);

    const formattedDate = format(zonedDate, "dd/MM");

    return formattedDate;
  };

  const handleBuy = () => {
    navigate("/course-list/" + courseId + "/buy");
  };

  function getYouTubeEmbedUrl(url: string): string | undefined {
    // Regular expression to find the YouTube video ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
  
    if (match && match[2].length === 11) {
      // Return the embed URL
      return `https://www.youtube.com/embed/${match[2]}`;
    } else {
      // Return undefined if no valid ID is found
      return undefined;
    }
  }

  return (
    <>
      <div className="tutor-detail-content">
        <div className="left">
          <div className="tutor-detail-header">
            <img src={course.CourseImageURL} className="course-image" />

            <div className="information">
              <div className="title">{course?.courseName}</div>

              <div className="user">
                <Avatar type="rounded" size={32} source={tutor?.image} />
                {/* {course?.Fullname} */}
                {tutor?.fullName}
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
                src={getYouTubeEmbedUrl(course.courseSampleVideo)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; ; picture-in-picture; web-share"
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
                  <Accordion key={index} style={{border: "2px solid #000", borderBottom:"none"}}>
                    <AccordionSummary
                      expandIcon={<img src={Arrow} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{unit.unitName} ({unit.minuteTime} phút)</Typography>
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
          {(isPaid) ? <CustomButton
            theme="light"
            btnColor={"#6B48F2"}
            btnText="Vào khóa học"
            color={"#fff"}
            onClick={() => {
              handleNavigation("./detail");
            }}
          /> :
            <>
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
            </>}


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

export default CourseOverview;
