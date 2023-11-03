import { instance, VERSION } from "../api";

export const getList = async (data: any) => {
  let {
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

  keywordQuery += `CourseName=${keyword}`;

  if (duration) {
    for (let keyword of duration) {
      keywordQuery += `&DurationType=${keyword}`;
    }
  }
  if (courseType) {
    if (courseType == 1) {
      keywordQuery += `&TeachingType=Online`;
    } else if (courseType == 2) {
      keywordQuery += `&TeachingType=Offline`;
    }
  }

  if (startTime) {
    for (let keyword of startTime) {
      keywordQuery += `&StartDateType=${keyword}`;
    }
  }
  if (value) {
    // const { min, max } = value;
    keywordQuery += `&StartPrice=${value[0]}000&EndPrice=${value[1]}000`;
  }
  if (cateList) {
    for (let keyword of cateList) {
      keywordQuery += `&CourseMajorId=${keyword}`;
    }
  }
  if (rating) {
    for (let keyword of rating) {
      keywordQuery += `&AvgRating=${keyword}`;
    }
  }

  // console.log(
  //   "api/TeachingCourse/Filter?" +
  //     keywordQuery +
  //     `&pageIndex=${pageIndex}&pageSize=${pageSize}`
  // );

  const response = await instance.get(
    "api/TeachingCourse/Filter?" +
      keywordQuery +
      `&pageIndex=${pageIndex}&pageSize=${pageSize}`
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
