import React from "react";
import "../common.scss";

type IconBtnProps = {
  // theme: string;
  type: string;
  icon: string;

};

const IconButton = ({ type, icon }: IconBtnProps) => {
  
  return (
    <>
        <div className={"icon-button" + " " + type + " " + "with-icon"}>
          <span >
            <img src={icon}></img>
          </span>
        </div>

    </>
  );
};

export default IconButton;