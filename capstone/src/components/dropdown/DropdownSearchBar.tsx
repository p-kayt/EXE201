import React from "react";

import { Arrow, SearchIcon } from "../../assets/Icons";

type SearchBarProps = {
  style?: object;
};

const DropdownSearchBar = (props: SearchBarProps) => {
  const { style } = props;

  return (
    <div className="dropdown-search-bar py-6" style={style}>
      <img src={SearchIcon} alt="" />
      <input placeholder="Search"></input>
      <img src={Arrow} className="search-bar-arrow" />
    </div>
  );
};

export default DropdownSearchBar;
