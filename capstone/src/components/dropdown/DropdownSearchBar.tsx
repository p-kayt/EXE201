import React from "react";

import { Arrow, SearchIcon } from "../../assets/Icons";

const DropdownSearchBar = () => {
  return (
    <div className="dropdown-search-bar">
      <img src={SearchIcon} alt="" />
      <input placeholder="Search"></input>
      <img src={Arrow} className="search-bar-arrow" />
    </div>
  );
};

export default DropdownSearchBar;
