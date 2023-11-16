import React, { useEffect, useState } from 'react'
import './courseDetail.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../api/api';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Arrow, Verify } from '../../assets/Icons';
import Avatar from "../../components/avatar/Avatar";
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selector';
import swal from 'sweetalert';

const CourseDetail = () => {
  const [activeVideo, setActiveVideo] = useState('');
  const user = useSelector(authSelector);
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [tutor, setTutor] = useState({
    id: 0,
    fullName: "string",
    image: "string",
    selfDecription: "string",
  });
  const [units, setUnits] = useState([{
    unitName: "string",
    minuteTime: 0,
    content: 'string',
    teachingMaterialFile: 'string',
  }]);
  let { courseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await instance.get("/api/TeachingCourse/GetById?id=" + courseId);
        const unitsData = courseResponse.data.result.units;
        setUnits(unitsData);

        // Check if units have data before proceeding
        if (unitsData && unitsData.length > 0) {
          const videoId = getDriveVideoId(unitsData[0].teachingMaterialFile);
          const embedLink = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : '';
          setActiveVideo(embedLink);
        }

        // Fetch tutor details
        const tutorId = courseResponse.data.result.tutorId;
        const tutorResponse = await instance.get("/api/User/Info?id=" + tutorId);
        setTutor(tutorResponse.data.result);

        // Fetch student details
        const studentResponse = await instance.get("/api/Student/GetById?id=" + user.user.Id);
        const orderResponse = await instance.get("/api/Order/GetByStudentId?id=" + studentResponse.data.result.id);
        orderResponse?.data?.result.map((item: any) => {
          if (item.orderDetails[0].teachingCourseId == courseId && item.orderStatus === "AlreadyPaid") {
            setIsPaid(true);            
          }
        });
      } catch (error) {
        console.error("An error occurred while fetching data", error);
        // Handle errors appropriately, maybe update state to show error message
      }
    };
    fetchData();
  }, [courseId, user.user.Id]);


  const getDriveVideoId = (link: string) => {
    const match = link.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const handleClick = (id: number) => {
    const videoId = getDriveVideoId(units[id].teachingMaterialFile);
    const embedLink = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : '';
    setActiveVideo(embedLink)
  }

  (!isPaid) ? swal("Bạn chưa mua khóa học này!", "", "error").then(() => navigate(-1)) : ""

  console.log(isPaid)

  return (
    <>
      {(isPaid) ? (<div className='course-detail-content'>
        <div className='video-content'>
          <div className='aspect-ratio-container'>
            <iframe
              width="560"
              height="315"
              src={activeVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ fontSize: "24px", fontWeight: "600" }}>
            Tác giả
          </div>

          <div className="user">
            <Avatar type="rounded" size={32} source={tutor?.image} />
            {/* {course?.Fullname} */}
            {tutor?.fullName}
            <img src={Verify} />
          </div>
        </div>

        <div className='unit-content'>
          <Accordion>
            <AccordionSummary>
              <Typography style={{ fontSize: "20px", fontWeight: "600" }}>
                Nội dung khóa học
              </Typography>
            </AccordionSummary>
          </Accordion>
          {units?.map((unit, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<img src={Arrow} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <label onClick={() => handleClick(index)}>
                  <Typography className='click'>{unit.unitName} ({unit.minuteTime} phút)</Typography>
                </label>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{unit.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>) : ""}
    </>
  )
}

export default CourseDetail