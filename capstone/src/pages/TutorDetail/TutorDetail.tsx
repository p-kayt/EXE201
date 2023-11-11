import React, { useEffect, useState } from 'react'
import { instance } from '../../api/api';
import { useParams } from 'react-router-dom';
import { Document, Page } from '@react-pdf/renderer';
import pdfFile from '../../assets/pdf/BuiMinhHieu_PrinciplesofAccounting.pdf'

interface DocumentLoadSuccessEvent {
  numPages: number;
}

const TutorDetail = () => {
  let { tutorId } = useParams();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [tutor, setTutor] = useState({
    id: 0,
    fullName: "string",
    email: "string",
    password: "string",
    dateOfBirth: "string",
    phoneNumber: "string",
    accountStatus: "string",
    image: "string",
    joinDate: "string",
    selfDecription: "string",
    createdAt: "string",
  });

  function onDocumentLoadSuccess({ numPages }: DocumentLoadSuccessEvent) {
    setNumPages(numPages);
  }

  useEffect(() => {
    instance.get("/api/User/Info?id=" + tutorId).then((res) => {
      setTutor(res.data.result);
    });
  }, [tutorId]);

  return (
    <div>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}>

        </Page>
        </Document>
    </div>
  )
}

export default TutorDetail