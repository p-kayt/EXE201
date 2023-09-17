import React from "react";
import Button from "../components/button/Button";
import DropdownSearchBar from "../components/dropdown/DropdownSearchBar";
import Dropdown from "../components/dropdown/Dropdown";
import AddCircleBold from "../assets/icons/add-circle-bold.svg";
import IconButton from "../components/button/IconButton";
import SearchIcon from "../assets/icons/search-linear.svg";
import Avatar from "../components/avatar/Avatar";
import Hearder from "../components/header/Hearder";

const TempComponent = () => {
  return (
    <>
      <Hearder/>

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
        <Avatar source="https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg"
                size={32}
                type={"rounded"}/>
      <div>Toast</div>
      <div>Cards</div>
    </>
  );
};

export default TempComponent;
