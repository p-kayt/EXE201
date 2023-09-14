import React from "react";
import SearchIcon from "../../assets/icons/search-linear.svg";
import Arrow from "../../assets/icons/arrow.svg";

const DropdownSearchBar = () => {
  return (
    <div className="dropdown-search-bar">
      <img src={SearchIcon} alt="" />
      <input placeholder="Search"></input>
      <img src={Arrow} className="search-bar-arrow"/>
    </div>
  );
};

export default DropdownSearchBar;
