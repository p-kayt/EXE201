import React from "react";
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

type Props = {};

const CoursesList = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState([]);

  const handleClickCard = (id: any) => {
    console.log(id);
  };

  // price
  const Price = () => {
    return <>price slider</>;
  };
  // rating
  const Rating = () => {
    return <>Rating check box</>;
  };
  return (
    <>
      <div className="list-container">
        <h1>Khoá học với gia sư</h1>
        <div className="content">
          <div className="filter-container">
            <div className="filter-item">
              <h2>Bộ lọc</h2>
            </div>
            <div className="filter-item">
              <h3>Giá</h3>
              <img src={Arrow} />
            </div>
            <div className="filter-item">
              <h3>Đánh giá</h3>
              <img src={Arrow} />
            </div>
            <div className="filter-item">
              <h3>Hình thức</h3>
              <img src={Arrow} />
            </div>
            <div className="filter-item">
              <h3>Thời gian bắt đầu</h3>
              <img src={Arrow} />
            </div>
            <div className="filter-item">
              <h3>Thời lượng buổi học</h3>
              <img src={Arrow} />
            </div>
          </div>
          <div className="list-item-container">
            <div className="search-group">
              <div className="search-bar">
                <img src={SearchIcon} alt="" />
                <input placeholder="Tìm kiếm bằng từ khoá hoặc mã môn"></input>
              </div>
              <div className="sort-box">
                <Dropdown dropdownText="Sắp xếp" selectedItem={""} />
              </div>
            </div>
            <div className="category">
              <div className="category-item selected">
                <img src={Category} />
                <p>Tất cả</p>
              </div>
              {categories.map((item, index) => (
                <div className="category-item" key={item.id}>
                  <img src={item.icon} />
                  <p>{item.courseMajorName}</p>
                </div>
              ))}
            </div>
            <div className="item-group">
              {items?.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleClickCard(item.id)}
                >
                  <span className="span">
                    <div className="card-content-container">
                      <div className="media">
                        <img src={item.CourseImage} alt={item.CourseName} />
                        <div className="major">
                          <p>{item.CourseMajorName} </p>
                        </div>
                      </div>
                      <div className="detail">
                        <div className="favorite-icon">
                          <img src={HeartLinear} />
                        </div>
                        <div className="tutor">
                          <div className="name">{item.Fullname}</div>
                        </div>
                        <div className="coursename">{item.CourseName}</div>
                        <div className="bottom">
                          <div className="rating">
                            <img src={StarFilled} />
                            <p>{item.RatingStar}</p>
                          </div>
                          <div className="price">
                            <p>{item.CoursePrice} đ </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesList;
