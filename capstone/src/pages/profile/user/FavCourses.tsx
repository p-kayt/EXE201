import React from "react";
import TabBar from "../../../components/tabs/TabBar";

type Props = {};

const FavCourses = (props: Props) => {
  return (
    <>
      <div className="content-container">
        <h1>Khóa học yêu thích</h1>
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

export default FavCourses;
