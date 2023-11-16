import React, { useEffect, useState } from 'react'
import './courseDetail.scss'
import { useParams } from 'react-router-dom';
import { instance } from '../../api/api';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Arrow, Verify } from '../../assets/Icons';
import Avatar from "../../components/avatar/Avatar";

const CourseDetail = () => {
  const [activeVideo, setActiveVideo] = useState('');
  const [tutorId, setTutorId] = useState(0);
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
        // Fetch course details
        const courseResponse = await instance.get("/api/TeachingCourse/GetById?id=" + courseId);
        const units = courseResponse.data.result.units;
        setUnits(units);

        if (units.length > 0) {
          const videoId = getDriveVideoId(units[0].teachingMaterialFile);
          const embedLink = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : '';
          setActiveVideo(embedLink);
        }

        const tutorId = courseResponse.data.result.tutorId;
        setTutorId(tutorId);

        const tutorResponse = await instance.get("/api/User/Info?id=" + tutorId);
        setTutor(tutorResponse.data.result);
      } catch (error) {
        console.error("An error occurred while fetching data", error);
      }
    };
    fetchData();
  }, [courseId]);

  const getDriveVideoId = (link: string) => {
    const match = link.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const handleClick = (id: number) => {
    const videoId = getDriveVideoId(units[id].teachingMaterialFile);
    const embedLink = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : '';
    setActiveVideo(embedLink)
  }

  return (
    <div className='course-detail-content'>
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
    </div>
  )
}

export default CourseDetail