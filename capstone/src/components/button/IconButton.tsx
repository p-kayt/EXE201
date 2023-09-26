import React from "react";
import "../common.scss";

type IconBtnProps = {
  // theme: string;
  type: string;
  icon: string;
  onClick?: (params: any) => any;
};

const IconButton = ({ type, icon, onClick }: IconBtnProps) => {
  return (
    <>
      <div
        className={"icon-button" + " " + type + " " + "with-icon"}
        onClick={onClick}
      >
        <span>
          <img src={icon}></img>
        </span>
      </div>
    </>
  );
};

export default IconButton;
