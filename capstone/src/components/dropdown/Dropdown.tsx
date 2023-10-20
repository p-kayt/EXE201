import React, { useState } from "react";
import "../common.scss";
import { Arrow, Check } from "../../assets/Icons";

type DropdownProps = {
  dropdownText: string;
  valueList?: string[];
  selectedItem?: string;
  style?: object;
};

const Dropdown = (props: DropdownProps) => {
  const [status, setStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);

  const onClickLabel = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  const onClickItem = (value: string) => {
    setStatus((prevStatus) => !prevStatus);
    setSelectedItem(value);
  };

  return (
    <div>
      <div
        className={status ? "dropdown-label-clicked" : "dropdown-label"}
        onClick={onClickLabel}
        style={props.style}
      >
        <p>{props.dropdownText}</p>
        <img src={Arrow} />
      </div>

      {status && (
        <div className="dropdown-content">
          {props.valueList?.map((value, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => onClickItem(value)}
            >
              {selectedItem === value ? <img src={Check} /> : <img />}
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
