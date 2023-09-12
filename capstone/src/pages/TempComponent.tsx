import React from "react";
import Button from "../components/button/Button";
import AddCircleBold from "../assets/icons/add-circle-bold.svg";
import IconButton from "../components/button/IconButton";
import SearchIcon from "../assets/icons/search-linear.svg";

const TempComponent = () => {
  return (
    <>
      <div>tempComponent</div>
      <Button type="disabled" icon={""} btnText="Button" />
      <Button type="enable" icon={AddCircleBold} btnText="Button" />
      <IconButton type="enable" icon={AddCircleBold} />

      <div className="search-bar">
        <img src={SearchIcon} alt="" />
        <input placeholder="Search"></input>
      </div>

      <div>Dropdown</div>
      <div>Tab bar</div>
      <div>Mini kit</div>
      <div>Chips</div>
      <div>Avatar</div>
      <div>Toast</div>
      <div>Cards</div>
    </>
  );
};

export default TempComponent;
