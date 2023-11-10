import * as React from "react";
import { instance } from "../../../api/api";
import { useQuery } from "@tanstack/react-query";
import { groupCountValueByDate } from "../../../utils/report.helper";
import ChartBasicArea from "../../../components/chart/ChartBasicArea";
import { Group, GroupDashboard, Hat } from "../../../assets/Icons";
import "./AdminStatistics.scss";
import { colors } from "@mui/material";
import {
  PiChalkboardTeacherFill,
  PiStudentBold,
  PiBook,
  PiBookOpenTextBold,
} from "react-icons/pi";

interface AdminStatisticsProps {}

const AdminStatistics: React.FC<AdminStatisticsProps> = () => {
  const tutorQuery = useQuery({
    queryKey: ["tutor"],
    queryFn: async () => {
      const data = await instance.get(
        "/api/Tutor/Get?pageIndex=0&pageSize=9999"
      );

      return groupCountValueByDate(data.data.result.items, "createdAt");
    },
    initialData: {},
  });

  const studentQuery = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const data = await instance.get(
        "/api/Student/Get?pageIndex=0&pageSize=9999"
      );

      return groupCountValueByDate(data.data.result.items, "createdAt");
    },
    initialData: {},
  });

  const totalTutor = useQuery({
    queryKey: ["totalTutor"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetTutor");

      return data.data.result;
    },
    initialData: 0,
  });

  const totalStudent = useQuery({
    queryKey: ["totalStudent"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetStudent");

      return data.data.result;
    },
    initialData: 0,
  });

  const tutorInMonth = useQuery({
    queryKey: ["tutorInMonth"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetTutorInMonth");

      return data.data.result;
    },
    initialData: 0,
  });

  const studentInMonth = useQuery({
    queryKey: ["studentInMonth"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetStudentInMonth");

      return data.data.result;
    },
    initialData: 0,
  });

  const totalSellCourse = useQuery({
    queryKey: ["totalSellCourse"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetCourseSelled");

      return data.data.result;
    },
    initialData: 0,
  });

  const totalNewCourse = useQuery({
    queryKey: ["totalNewCourse"],
    queryFn: async () => {
      const data = await instance.get("/api/Dashboard/GetCourseCreatedInMonth");

      return data.data.result;
    },
    initialData: 0,
  });

  return (
    <div
      style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gap: "1rem",
          gridColumn: `1 / span 2`,
        }}
      >
        <div className="badge__container">
          <div className="icons">
            <PiChalkboardTeacherFill />
          </div>
          <div className="wrapper">
            <div className="title">Tổng Gia Sư</div>
            <div className="statistics">{totalTutor.data} Người</div>
            <div className="number">+ {tutorInMonth.data} trong tháng</div>
          </div>
        </div>

        <div className="badge__container">
          <div className="icons">
            <PiStudentBold />
          </div>
          <div className="wrapper">
            <div className="title">Tổng Học Sinh</div>
            <div className="statistics">{totalStudent.data} Người</div>
            <div className="number">+ {studentInMonth.data} trong tháng</div>
          </div>
        </div>
        <div className="badge__container">
          <div className="icons">
            <PiBook />
          </div>
          <div className="wrapper">
            <div className="title">Khóa Học Đã Bán</div>
            <div className="statistics">{totalSellCourse.data} Khóa</div>
            <div className="number">+ {0} trong tháng</div>
          </div>
        </div>
        <div className="badge__container">
          <div className="icons">
            <PiBookOpenTextBold />
          </div>
          <div className="wrapper">
            <div className="title">Khóa Học Mới</div>
            <div className="statistics">{totalNewCourse.data} Khóa</div>
            <div className="number">+ {0} trong tháng</div>
          </div>
        </div>
      </div>

      <ChartBasicArea
        colors={["#ffa726"]}
        title={"Tutor By Date"}
        unit={"Tutor"}
        values={Object.keys(tutorQuery.data).map((key) => ({
          name: key,
          data: tutorQuery.data[key],
        }))}
      />
      <ChartBasicArea
        colors={["#F44336"]}
        title={"Student By Date"}
        unit={"Student"}
        values={Object.keys(studentQuery.data).map((key) => ({
          name: key,
          data: studentQuery.data[key],
        }))}
      />
    </div>
  );
};

export default AdminStatistics;
