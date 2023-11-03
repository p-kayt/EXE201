import React, { useEffect, useState } from 'react'
import { Group, GroupDashboard, Hat } from '../../../assets/Icons'
import "./dashboard.scss"
import { colors } from '@mui/material';

const Dashboard = () => {
  const [totalTutor, setTotalTutor] = useState(0);
  const [totalStudent, setTotalStudent] = useState(0);
  const [tutorInMonth, setTutorInMonth] = useState(0);
  const [studentInMonth, setStudentInMonth] = useState(0);

  const getTotalTutor = () => {
    fetch("https://zunitutor.azurewebsites.net/api/Dashboard/GetTutor")
      .then((response) => response.json())
      .then((result) => {
        setTotalTutor(result.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const getTotalStudent = () => {
    fetch("https://zunitutor.azurewebsites.net/api/Dashboard/GetStudent")
      .then((response) => response.json())
      .then((result) => {
        setTotalStudent(result.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const getTutorInMonth = () => {
    fetch("https://zunitutor.azurewebsites.net/api/Dashboard/GetTutorInMonth")
      .then((response) => response.json())
      .then((result) => {
        setTutorInMonth(result.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const getStudentInMonth = () => {
    fetch("https://zunitutor.azurewebsites.net/api/Dashboard/GetStudentInMonth")
      .then((response) => response.json())
      .then((result) => {
        setStudentInMonth(result.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getTotalTutor()
    getTotalStudent()
    getTutorInMonth()
    getStudentInMonth()
  }, [])

  return (
    <div className='dashboard-content'>
      <div className='dashboard-tab'>
        <div className='dashboard-tab-top-content'>
          <div className='dashboard-icon' style={{ backgroundColor: "orange" }}>
            <img src={Hat} />
          </div>

          <div className='dashboard-total'>
            Tutor<br />
            <span>{totalTutor} Tutors</span>
          </div>
        </div>

        <div className='dashboard-tab-bottom-content'>
          <span>+ {tutorInMonth}</span> in this month
        </div>
      </div>

      <div className='dashboard-tab'>
        <div className='dashboard-tab-top-content'>
          <div className='dashboard-icon' style={{ backgroundColor: "blue" }}>
            <img src={GroupDashboard} />
          </div>

          <div className='dashboard-total'>
            Student<br />
            <span>{totalStudent} Students</span>
          </div>
        </div>

        <div className='dashboard-tab-bottom-content'>
          <span>+ {studentInMonth}</span> in this month
        </div>
      </div>

      <div className='dashboard-tab'>
        <div className='dashboard-tab-top-content'>
          <div className='dashboard-icon' style={{ backgroundColor: "red" }}>
            <img src={Hat} />
          </div>

          <div className='dashboard-total'>
            Tutor<br />
            <span>{totalTutor} Tutors</span>
          </div>
        </div>

        <div className='dashboard-tab-bottom-content'>
          <span>+ {tutorInMonth}</span> in this month
        </div>
      </div>

      {/* <div className='dashboard-tab'>
        <div className='dashboard-tab-top-content'>
          <div className='dashboard-icon' style={{ backgroundColor: "green" }}>
            <img src={Hat} />
          </div>

          <div className='dashboard-total'>
            Tutor<br />
            <span>{totalTutor} Tutors</span>
          </div>
        </div>

        <div className='dashboard-tab-bottom-content'>
          <span>+ {tutorInMonth}</span> in this month
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard