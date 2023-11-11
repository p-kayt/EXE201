import React, { useEffect, useState } from "react";
import "./buypage.scss";
import { useParams } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";

import { BlankAva } from "../../assets/Images";
import { Verify } from "../../assets/Icons";
import CustomButton from "../../components/button/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import { instance } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selector";
type Props = {};

const BuyPage = (props: Props) => {
  let { courseId } = useParams();
  const auth = useSelector(authSelector);
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

  useEffect(() => {
    instance.get("/api/TeachingCourse/GetById?id=" + courseId).then((res) => {
      setCourse(res.data.result);
    });
  }, [courseId]);

  // useEffect(() => {
  //   fetch("/api/TeachingCourse/" + courseId)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCourse(result.result[0]);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch("https://zunitutor.azurewebsites.net/api/TeachingCourse/" + courseId)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCourse(result.result[0]);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  const walletQuery = useQuery({
    queryKey: ["wallet", auth?.user?.Id],
    queryFn: async () => {
      const res = await instance.get(
        "/api/Wallet/GetWalletByUserId?id=" + auth?.user?.Id
      );

      return res.data.result.walletAmount;
    },
    initialData: 0,
    enabled: auth?.user?.Id != null,
  });
  const handleBuy = () => {
    console.log(walletQuery.data);
    const data = {
      orderDate: "2023-11-11T00:50:00.288Z",
      orderStatus: "Pending",
      studentId: 0,
      tutorId: 0,
      orderDetails: [
        {
          teachingCourseId: courseId,
        },
      ],
    };
    if (walletQuery.data < course?.coursePrice) {
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
    } else {
      instance.post("/api/Order/Create").then((res) => {
        console.log(res.data.result);
      });
      instance.put("/api/Order/PayBooking?id=" + courseId).then((res) => {
        console.log(res.data.result);
      });
    }
  };
  return (
    <>
      <div className="buypage-container">
        <h1>Thanh toán</h1>
        <div className="content">
          <div className="course-info">
            <div className="title">{course?.courseName}</div>
            <div className="user">
              <Avatar type="rounded" size={32} source={BlankAva} />
              {/* {course?.Fullname} */}
              Lê Thị Dung
              <img src={Verify} />
            </div>
          </div>
          <div className="price-box">
            <h3>Tạm tính</h3>
            <div className="price">
              {/* <span className="old-price">
                    1.000.000 đ <br />
                  </span> */}
              <h4>Tổng cộng:</h4>
              <span className="new-price">{course?.coursePrice} đ</span>
            </div>
            <div className="divider"></div>
            <div className="method">
              <h3>Thanh toán với</h3>
              <label className="radio">
                <input className="radio" type="radio" defaultChecked />
                <span>Ví zuni</span>
              </label>
            </div>

            <CustomButton
              theme="light"
              btnColor={"#F0631C"}
              btnText="Xác nhận"
              color={"#fff"}
              onClick={() => {
                handleBuy();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
