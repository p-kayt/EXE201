import React from "react";
import "../common.scss";
import Avatar from "../avatar/Avatar";
import clsx from "clsx";

type BtnProps = {
  theme: "light" | "dark" | "stripe";
  style?: object;
  enabled?: boolean;
  btnColor?: any;
  color?: any;
  iconSrc?: string;
  imgSrc?: string;
  imgOptions?: "rounded" | "squared";
  imgSize?: number;
  btnText?: string;
  onClick?: (params: any) => any;
};

const CustomButton = (props: BtnProps) => {
  const {
    theme,
    style,
    enabled = true,
    btnColor,
    color,
    iconSrc,
    imgSrc,
    imgOptions = "rounded",
    imgSize = 32,
    btnText,
    onClick,
  } = props;
  //   default value
  let btnClass = "";

  let mediaContent = <></>;
  // theme
  switch (theme) {
    case "light": {
      btnClass = "button";
      break;
    }
    case "dark": {
      btnClass = "button";
      break;
    }
    case "stripe": {
      btnClass = "stripe-button";
      break;
    }
    default: {
      btnClass = "button";
      break;
    }
  }
  // state
  if (enabled) {
    btnClass = btnClass.concat(" enable");
  } else {
    btnClass = btnClass.concat(" disabled");
  }
  // media

  if (iconSrc) {
    mediaContent = (
      <>
        <img src={iconSrc}></img>
      </>
    );
  }
  if (imgSrc) {
    if (imgOptions)
      mediaContent = (
        <Avatar source={imgSrc} type={imgOptions} size={imgSize} />
      );
  }
  //

  return (
    <>
      <div
        style={style}
        className={clsx(btnClass)}
        onClick={enabled ? onClick : () => {}}
      >
        <span
          className="!font-semibold"
          style={{ backgroundColor: btnColor, color: color }}
        >
          {iconSrc || imgSrc ? mediaContent : ""}
          {btnText}
        </span>
      </div>
    </>
  );
};

export default CustomButton;
