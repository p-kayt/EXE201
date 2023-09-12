import React from "react";
import "../common.scss";

type BtnProps = {
  // theme: string;
  type: string;
  icon: string;
  btnText?: string;
};

const Button = ({ type, icon, btnText }: BtnProps) => {
  // console.log(theme.concat(" ", type, " " + (showIcon ? "icon" : "" )) );

  return (
    <>
      {icon ? (
        <div className={"button" + " " + type + " " + "with-icon"}>
          <span>
            {<img src={icon}></img>}
            {btnText}
          </span>
        </div>
      ) : (
        <div className={"button" + " " + type}>
          <span>{btnText}</span>
        
        </div>
      )}
    </>
  );
};

export default Button;
