import React from "react";
import { useParams } from "react-router-dom";
import { CourseImg } from "../../assets/Images";
import Avatar from "../../components/avatar/Avatar";
import { Verify } from "../../assets/Icons";
import { data } from "./data";

const TutorDetail = () => {
  let { id } = useParams();

  return (
    <>
      {data.map((course) => {
        course.id == Number(id) ? (
          <div className="tutor-detail-content">
            <div className="left">
              <div className="header">
                <div className="image">
                  <img src={CourseImg} />
                </div>

                <div className="information">
                  <div className="title">{course.CourseName}</div>

                  <div className="user">
                    {course.Fullname}
                    <img src={Verify} />
                  </div>

                  <div className="student">
                    <div>Học viên</div>
                    <div>{course.TotalStudent}</div>
                  </div>
                </div>

                <div className="buttons">

                </div>
              </div>

              <div className="tabs">

              </div>
            </div>

            <div className="right"></div>
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default TutorDetail;
