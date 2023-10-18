import React, { useState } from "react";
import "../common.scss";
import { Arrow, Check } from "../../assets/Icons";

type DropdownProps = {
  dropdownText: string;
  valueList?: string[];
  selectedItem: string;
};

const Dropdown = (props: DropdownProps) => {
  const [status, setStatus] = useState(false);

  const onClickLabel = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <div>
      <div
        className={status ? "dropdown-label-clicked" : "dropdown-label"}
        onClick={onClickLabel}
      >
        <p>{props.dropdownText}</p>
        <img src={Arrow} />
      </div>

      {status && (
        <div className="dropdown-content">
          {props.valueList?.map((value) => (
            <div className="dropdown-item">
              {props.selectedItem === value ? <img src={Check} /> : <img />}
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
