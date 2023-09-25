import React from "react";
import "../common.scss";

type BtnProps = {
  theme: string;
  type: string;
  icon: string;
  btnText?: string;
};

const Button = ({ theme, type, icon, btnText }: BtnProps) => {
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
        <div className={btnClass + " " + type + " " + "with-icon"}>
          <span>
            {<img src={icon}></img>}
            {btnText}
          </span>
        </div>
      ) : (
        <div className={btnClass + " " + type}>
          <span>{btnText}</span>
        </div>
      )}
    </>
  );
};

export default Button;
