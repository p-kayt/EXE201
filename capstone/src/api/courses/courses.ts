import { instance, VERSION } from "../api";

export const getList = async (data: any) => {
  const {
    keyword,
    value,
    rating,
    courseType,
    startTime,
    duration,
    cateList,
    pageIndex,
    pageSize,
  } = data;

  let keywordQuery = "";
  if (keyword) {
    keywordQuery += `CourseName=${keyword}`;
  }
  if (value) {
    const { min, max } = value;
    keywordQuery += `CourseName=${keyword}`;
  }
  if (rating) {
    keywordQuery += `CourseName=${keyword}`;
  }
  if (courseType) {
    if (courseType == 1) {
      keywordQuery += `CourseName=${keyword}`;
    } else if (courseType == 2) {
      keywordQuery += `CourseName=${keyword}`;
    }
  }
  if (startTime) {
    keywordQuery += `CourseName=${keyword}`;
  }
  if (duration) {
    keywordQuery += `CourseName=${keyword}`;
  }
  if (cateList) {
    for (let keyword of cateList) {
      keywordQuery += `&CourseMajorId=${encodeURIComponent(keyword)}`;
    }
  }

  const response = await instance.post(
    "api/TeachingCourse/Filter?" + keywordQuery
  );
  return response.data;
};

/* Filter
?CourseName=1
&Duration=1
&TotalWeek=1
&TeachingType=Online
&StartDate=12%2F20%2F2020
&EndDate=12%2F30%2F2020
&CoursePrice=1
&ClassLocation=1
&TutorId=1                          ==nope
&UniversityId=1                     ==nope
&CourseMajorId=1
&AvgRating=1
&pageIndex=0
&pageSize=10
*/
