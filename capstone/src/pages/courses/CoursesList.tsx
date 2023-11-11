import React, { useEffect } from "react";
import "./courseList.scss";
import {
  Arrow,
  Category,
  HeartLinear,
  SearchIcon,
  StarFilled,
} from "../../assets/Icons";
import Dropdown from "../../components/dropdown/Dropdown";
import { categories, items } from "./data";
import { useNavigate } from "react-router-dom";
import { Slider, Pagination, CircularProgress } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  CourseThumbnail,
  rating0,
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
} from "../../assets/Images";
import TabBar from "../../components/tabs/TabBar";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesList } from "../../store/api-thunk/coursesThunk";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { coursesSelector } from "../../store/selector";

type Props = {};

const CoursesList = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const courses = useSelector(coursesSelector);
  let items = courses.data?.items;

  let totalPageCount = courses.data?.totalPagesCount;
  const [isExpand, setExpand] = React.useState(Array<string>);
  // search
  const [keyword, setkeyword] = React.useState("");
  // price filter
  const [value, setValue] = React.useState<number[]>([50, 2000]);
  const [minValue, setMinValue] = React.useState(value[0]);
  const [maxValue, setMaxValue] = React.useState(value[1]);
  // rating filter
  const [rating, setRating] = React.useState<number[]>([0, 1, 2, 3, 4, 5]);
  // course type
  const [courseType, setCourseType] = React.useState(0);
  // start time
  const [startTime, setStartTime] = React.useState<number[]>([1, 2, 3]);
  // duration
  const [duration, setDuration] = React.useState<number[]>([1, 2, 3]);
  // cate
  const [cateList, setCatelist] = React.useState<number[]>([0]);

  //pagination
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(totalPageCount);

  // filter byname
  items = courses.data?.items.filter((item: any) =>
    item.courseName.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleClickCard = (id: any) => {
    navigate(`./${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let pageSize = 12;
    let newCateList: number[] = [];
    if (cateList[0] == 0) {
      for (let cate of categories) {
        newCateList.push(cate.id);
        newCateList = newCateList.filter((element) => element !== 0);
      }
    } else {
      for (let cate of cateList) {
        newCateList.push(cate);
      }
    }

    // limit
    let newDurList: number[] = [];
    let newStartList: number[] = [];
    if (duration.length <= 0) {
      newDurList = [1, 2, 3];
    } else {
      newDurList = [...duration];
    }
    if (startTime.length <= 0) {
      newStartList = [1, 2, 3];
    } else {
      newStartList = [...startTime];
    }

    dispatch(
      getCoursesList({
        keyword,
        value,
        rating,
        courseType,
        startTime: newStartList,
        duration: newDurList,
        cateList: newCateList,
        pageIndex: page,
        pageSize,
      })
    );
  }, [keyword, value, rating, courseType, startTime, duration, cateList, page]);
  const handleSearch = (e: any) => {
    setkeyword(e.target.value);
  };

  const handleExpand = (item: any) => {
    if (isExpand.find((compare) => compare === item)) {
      const newArray = isExpand.filter((element) => element !== item);
      setExpand(newArray);
    } else {
      setExpand([...isExpand, item]);
    }
  };

  // price filter
  useEffect(() => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  }, [value]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleMin = (e: any) => {
    const min = e.target.value;
    const newValue = [min, value[1]];
    setValue(newValue);
  };
  const handleMax = (e: any) => {
    const max = e.target.value;
    const newValue = [value[0], max];
    setValue(newValue);
  };
  // rating filter
  const handleCheckboxChange = (item: any) => {
    if (rating.find((compare) => compare === item)) {
      const newArray = rating.filter((element) => element !== item);
      setRating(newArray);
    } else {
      setRating([...rating, item]);
    }
  };
  // start time
  const handleStartTimeChange = (item: any) => {
    if (startTime.find((compare) => compare === item)) {
      const newArray = startTime.filter((element) => element !== item);
      setStartTime(newArray);
    } else {
      setStartTime([...startTime, item]);
    }
  };
  // duration
  const handleDurationChange = (item: any) => {
    if (duration.find((compare) => compare === item)) {
      const newArray = duration.filter((element) => element !== item);
      setDuration(newArray);
    } else {
      setDuration([...duration, item]);
    }
  };
  // categories
  const handleCheckCate = (item: any) => {
    if (item === 0) {
      // If the item clicked is the one with id=1, uncheck all others and check id=1.
      setCatelist([item]);
    } else {
      // If the item clicked is not id=1, uncheck id=1 and toggle the selected item.
      let newArray = [...cateList];
      if (newArray.includes(0)) {
        newArray = newArray.filter((element) => element !== 0);
      }
      const isItemInList = newArray.some((element) => element === item);

      if (isItemInList) {
        // If the item is already in the list, remove it.
        newArray = newArray.filter((element) => element !== item);
        if (newArray.length === 0) {
          setCatelist([0]);
        } else {
          setCatelist(newArray);
        }
      } else {
        // If the item is not in the list, add it.
        setCatelist([...newArray, item]);
      }
    }
  };
  // pagination
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  // console.log(items);

  return (
    <>
      <div className="list-container">
        <h1 className="text-[32px] font-bold">Khoá học với gia sư</h1>
        <div className="content">
          <div className="filter-container">
            <div className="filter-item">
              <h2 className="text-2xl font-bold">Bộ lọc</h2>
            </div>
            <div className="filter-item">
              <div
                className="filter-label"
                onClick={() => handleExpand("price")}
              >
                <h3 className="font-bold text-[19px]">Giá</h3>
                {isExpand.includes("price") ? (
                  <img
                    style={{
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s",
                    }}
                    src={Arrow}
                  />
                ) : (
                  <img src={Arrow} />
                )}
              </div>

              {isExpand.includes("price") && (
                <div style={{ width: "85%", margin: "0 auto" }}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    min={50}
                    max={2000}
                  />
                  <div className="input-group">
                    <div className="input">
                      <input
                        type="number"
                        placeholder="50"
                        value={minValue}
                        required
                        onChange={(e) => handleMin(e)}
                      />
                      <span>.000đ</span>
                    </div>
                    -
                    <div className="input">
                      <input
                        type="number"
                        placeholder="2 000"
                        value={maxValue}
                        required
                        onChange={(e) => handleMax(e)}
                      />
                      <span>.000đ</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="filter-item">
              <div
                className="filter-label"
                onClick={() => handleExpand("rating")}
              >
                <h3 className="font-bold text-[19px]">Đánh giá</h3>
                {isExpand.includes("rating") ? (
                  <img
                    style={{
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s",
                    }}
                    src={Arrow}
                  />
                ) : (
                  <img src={Arrow} />
                )}
              </div>
              {isExpand.includes("rating") && (
                <div className="rating-container">
                  <div className="rating-item">
                    <img src={rating5} alt="" />
                    <input
                      type="checkbox"
                      checked={rating.includes(5)}
                      onChange={() => handleCheckboxChange(5)}
                    />
                  </div>
                  <div className="rating-item">
                    <img src={rating4} alt="" />
                    <input
                      type="checkbox"
                      checked={rating.includes(4)}
                      onChange={() => handleCheckboxChange(4)}
                    />
                  </div>
                  <div className="rating-item">
                    <img src={rating3} alt="" />
                    <input
                      type="checkbox"
                      checked={rating.includes(3)}
                      onChange={() => handleCheckboxChange(3)}
                    />
                  </div>
                  <div className="rating-item">
                    <img src={rating2} alt="" />
                    <input
                      type="checkbox"
                      checked={rating.includes(2)}
                      onChange={() => handleCheckboxChange(2)}
                    />
                  </div>
                  <div className="rating-item">
                    <img src={rating1} alt="" />
                    <input
                      type="checkbox"
                      checked={rating.includes(1)}
                      onChange={() => handleCheckboxChange(1)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="filter-item">
              <div
                className="filter-label"
                onClick={() => handleExpand("type")}
              >
                <h3 className="font-bold text-[19px]">Hình thức</h3>
                {isExpand.includes("type") ? (
                  <img
                    style={{
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s",
                    }}
                    src={Arrow}
                  />
                ) : (
                  <img src={Arrow} />
                )}
              </div>
              {isExpand.includes("type") && (
                <div className="">
                  <TabBar
                    valueList={["Tất cả", "Trực tuyến", "Trực tiếp"]}
                    selectedIndex={courseType}
                    setSelectedIndex={setCourseType}
                  />
                </div>
              )}
            </div>
            <div className="filter-item">
              <div
                className="filter-label"
                onClick={() => handleExpand("start-time")}
              >
                <h3 className="font-bold text-[19px]">Thời gian bắt đầu</h3>
                {isExpand.includes("start-time") ? (
                  <img
                    style={{
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s",
                    }}
                    src={Arrow}
                  />
                ) : (
                  <img src={Arrow} />
                )}
              </div>
              {isExpand.includes("start-time") && (
                <div className="start-time-container">
                  <div className="start-time-item">
                    <p>Trong 3 ngày</p>
                    <input
                      type="checkbox"
                      checked={startTime.includes(1)}
                      onChange={() => handleStartTimeChange(1)}
                    />
                  </div>
                  <div className="start-time-item">
                    <p>Trong 1 tuần</p>
                    <input
                      type="checkbox"
                      checked={startTime.includes(2)}
                      onChange={() => handleStartTimeChange(2)}
                    />
                  </div>
                  <div className="start-time-item">
                    <p>Trong 3 tuần</p>
                    <input
                      type="checkbox"
                      checked={startTime.includes(3)}
                      onChange={() => handleStartTimeChange(3)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="filter-item">
              <div
                className="filter-label"
                onClick={() => handleExpand("duration")}
              >
                <h3 className="font-bold text-[19px]">Thời lượng buổi học</h3>
                {isExpand.includes("duration") ? (
                  <img
                    style={{
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s",
                    }}
                    src={Arrow}
                  />
                ) : (
                  <img src={Arrow} />
                )}
              </div>
              {isExpand.includes("duration") && (
                <div className="start-time-container">
                  <div className="start-time-item">
                    <p>Dưới 1 tiếng</p>
                    <input
                      type="checkbox"
                      checked={duration.includes(1)}
                      onChange={() => handleDurationChange(1)}
                    />
                  </div>
                  <div className="start-time-item">
                    <p>Từ 1 tiếng đến 2 tiếng</p>
                    <input
                      type="checkbox"
                      checked={duration.includes(2)}
                      onChange={() => handleDurationChange(2)}
                    />
                  </div>
                  <div className="start-time-item">
                    <p>Trên 2 tiếng</p>
                    <input
                      type="checkbox"
                      checked={duration.includes(3)}
                      onChange={() => handleDurationChange(3)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" list-item-container">
            <div className="search-group">
              <div className="search-bar !h-auto">
                <img src={SearchIcon} alt="" />
                <input
                  className="!py-2 block"
                  placeholder="Tìm kiếm bằng từ khoá hoặc mã môn"
                  onChange={(e) => handleSearch(e)}
                ></input>
              </div>
              <div className="sort-box" style={{ display: "none" }}>
                <Dropdown
                  dropdownText="Sắp xếp"
                  // valueList={[
                  //   "Dropdown item 1",
                  //   "Dropdown item 2",
                  //   "Dropdown item 3",
                  //   "Dropdown item 4",
                  // ]}
                  selectedItem={""}
                />
              </div>
            </div>
            {/* ================= */}
            <div
              className="max-w-screen-xl py-2 "
              style={{
                maxWidth: "1400px",
              }}
            >
              <Swiper
                spaceBetween={8}
                slidesPerView={6.5}
                className="category "
                style={{ height: 50, padding: "10px 0" }}
              >
                {categories.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    style={{}}
                    onClick={() => handleCheckCate(item.id)}
                  >
                    <div
                      className={
                        cateList.includes(item.id)
                          ? "category-item selected"
                          : "category-item"
                      }
                    >
                      <img src={item.icon} />
                      <p>{item.courseMajorName}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* =========== */}
            {courses.loading === "loading" ? (
              <CircularProgress color="secondary" />
            ) : items ? (
              <>
                <div className="item-group">
                  {items?.map((item: any, index: number) => {
                    return (
                      <div
                        className="card"
                        key={index}
                        onClick={() => handleClickCard(item.id)}
                      >
                        <span className="span">
                          <div className="card-content-container">
                            <div className="media">
                              <img
                                src={
                                  item.courseImageURL
                                    ? item.courseImageURL
                                    : CourseThumbnail
                                }
                                alt={item.courseName}
                              />
                              <div className="major">
                                <p>{item?.courseMajor?.courseMajorName} </p>
                              </div>
                            </div>
                            <div className="detail">
                              <div className="favorite-icon">
                                <img src={HeartLinear} />
                              </div>
                              <div className="tutor">
                                <div className="name">{item.Fullname}</div>
                              </div>
                              <div className="coursename">
                                {item.courseName}
                              </div>
                              <div className="bottom">
                                <div className="rating">
                                  <img src={StarFilled} />
                                  <p>{item.ratingStar}</p>
                                </div>
                                <div className="price">
                                  <p>{item.coursePrice} đ </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="pagination">
                  <Pagination
                    count={totalPage}
                    page={page}
                    onChange={handleChangePage}
                    color="secondary"
                    shape="rounded"
                  />
                </div>
              </>
            ) : (
              <div
                style={{
                  margin: "10px auto",
                  fontSize: "18px",
                  width: "300px",
                }}
                className="tab-container"
              >
                {/* {courses.message} */}
                Không có khóa học phù hợp.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesList;
