import React from "react";
import "../common.scss";

type BtnProps = {
  theme: string;
  type: string;
  icon?: string;
  btnText: string;
  onClick?: (params: any) => any;
};

const Button = ({ theme, type, icon, btnText, onClick }: BtnProps) => {
  // console.log(theme.concat(" ", type, " " + (showIcon ? "icon" : "" )) );
  let btnClass = "";
  if (theme === "normal") {
    btnClass = "button";
  }
  if (theme === "stripe") {
    btnClass = "stripe-button";
  }

  return (
    <>
      {icon ? (
        <div className={btnClass + " " + type + " "} onClick={onClick}>
          <span>
            {<img src={icon}></img>}
            {btnText}
          </span>
        </div>
      ) : (
        <div className={btnClass + " " + type} onClick={onClick}>
          <span>{btnText}</span>
        </div>
      )}
    </>
  );
};

export default Button;
