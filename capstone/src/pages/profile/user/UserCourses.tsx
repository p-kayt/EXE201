import React, { useEffect, useState } from "react";
import TabBar from "../../../components/tabs/TabBar";
import { CircularProgress, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CourseThumbnail } from "../../../assets/Images";
import { HeartLinear, StarFilled } from "../../../assets/Icons";
import { instance } from "../../../api/api";
import { useSelector } from "react-redux";
import { authSelector } from "../../../store/selector";
import { AxiosResponse } from "axios";
import "../userProfile.scss";
import { categories } from "../../courses/data";
type Props = {};

const UserCourses = (props: Props) => {
  const user = useSelector(authSelector);
  const [status, setStatus] = useState("loading");
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    try {
      const studentResponse = await instance.get(
        "/api/Student/GetById?id=" + user.user.Id
      );
      const orderResponse = await instance.get(
        "/api/Order/GetByStudentId?id=" + studentResponse.data.result.id
      );
      if (orderResponse) {
        setStatus("loaded");
        setOrders(
          orderResponse.data.result.filter(
            (item: any) => item.orderStatus !== "Pending"
          )
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [user.user.Id]);

  const navigate = useNavigate();
  // // let courses = { data: { totalPageCount: 2 } };
  // let totalPageCount = courses.data?.totalPagesCount;
  // const [page, setPage] = React.useState(1);
  // const [totalPage, setTotalPage] = React.useState(totalPageCount);
  let items: any = [];

  const handleClickCard = (id: any) => {
    navigate(`../../course-list/${id}`);
    window.scrollTo(0, 0);
  };
  // const handleChangePage = (
  //   event: React.ChangeEvent<unknown>,
  //   value: number
  // ) => {
  //   setPage(value);
  // };
  return (
    <>
      <div className="content-container">
        <h1>Khóa học đã mua</h1>
        <div style={{ margin: "10px" }}>
          {/* <TabBar
            valueList={["Môn học", "Khóa học online"]}
            selectedIndex={0}
            setSelectedIndex={() => {}}
          /> */}

          <div className="list-item-container">
            {status === "loading" ? (
              <CircularProgress color="secondary" />
            ) : (
              <>
                <div className="item-group">
                  {orders?.map((item: any, index: number) => {
                    return (
                      <>
                        <div
                          className="card"
                          key={index}
                          onClick={() => handleClickCard(item.id)}
                        >
                          <span className="span">
                            <div className="card-content-container">
                              <div className="media">
                                <img
                                  src={
                                    item.orderDetails[0].teachingCourse
                                      .courseImageURL
                                      ? item.courseImageURL
                                      : CourseThumbnail
                                  }
                                  alt={
                                    item.orderDetails[0].teachingCourse
                                      .courseName
                                  }
                                />
                                <div className="major">
                                  <p>
                                    {
                                      categories.find(
                                        (e) =>
                                          e.id ===
                                          item.orderDetails[0].teachingCourse
                                            .courseMajorId
                                      )?.courseMajorName
                                    }
                                  </p>
                                </div>
                              </div>
                              <div className="detail">
                                <div
                                  className="favorite-icon"
                                  style={{ display: "none" }}
                                >
                                  <img src={HeartLinear} />
                                </div>
                                <div className="tutor">
                                  <div className="name">
                                    {item.tutor.user.fullName}
                                  </div>
                                </div>
                                <div className="coursename">
                                  {
                                    item.orderDetails[0].teachingCourse
                                      .courseName
                                  }
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
                {/* <div className="pagination">
                <Pagination
                  count={totalPage}
                  page={page}
                  onChange={handleChangePage}
                  color="secondary"
                  shape="rounded"
                />
              </div> */}
              </>
            )}
          </div>

          {/* ) : (
            <div
              style={{
                margin: "10px auto",
                fontSize: "18px",
                width: "300px",
              }}
              className="tab-container"
            >
            
              Không có khóa học.
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default UserCourses;
