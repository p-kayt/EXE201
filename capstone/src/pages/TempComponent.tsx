import React from "react";
import Button from "../components/button/Button";
import DropdownSearchBar from "../components/dropdown/DropdownSearchBar";
import Dropdown from "../components/dropdown/Dropdown";
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
      <br/>

      <DropdownSearchBar/>
      <br/>

      <Dropdown
        dropdownText="Dropdown"
        valueList={[
          "Dropdown item 1",
          "Dropdown item 2",
          "Dropdown item 3",
          "Dropdown item 4",
        ]}
        selectedItem={"Dropdown item 1"}
      />

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
