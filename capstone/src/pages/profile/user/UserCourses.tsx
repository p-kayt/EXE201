import React from "react";
import TabBar from "../../../components/tabs/TabBar";

type Props = {};

const UserCourses = (props: Props) => {
  return (
    <>
      <div className="content-container">
        <h1>Khóa học đã mua</h1>
        <div style={{ margin: "10px" }}>
          <TabBar
            valueList={["Môn học", "Khóa học online"]}
            selectedItem={"Môn học"}
          />
        </div>
      </div>
    </>
  );
};

export default UserCourses;
