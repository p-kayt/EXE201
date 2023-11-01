import React from "react";
import TabBar from "../../../components/tabs/TabBar";

type Props = {};

const LearnedCourses = (props: Props) => {
  return (
    <>
      <div className="content-container">
        <h1>Khóa học đã học</h1>
        <div style={{ margin: "10px" }}>
          <TabBar
            valueList={["Môn học", "Khóa học online"]}
            selectedIndex={0}
            setSelectedIndex={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default LearnedCourses;
