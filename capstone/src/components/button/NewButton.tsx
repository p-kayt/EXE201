import React from "react";
import "../common.scss";
import Avatar from "../avatar/Avatar";

type BtnProps = {
  theme: "light" | "dark" | "stripe";
  style?: object;
  enabled: boolean;
  color?: any;

  iconSrc?: string;
  imgSrc?: string;
  imgOptions?: "rounded" | "squared";
  imgSize?: number;
  btnText?: string;
  onClick?: (params: any) => any;
};

const NewButton = (props: BtnProps) => {
  const {
    theme,
    style,
    enabled,
    color,
    iconSrc,
    imgSrc,
    imgOptions,
    imgSize,
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
        <Avatar
          source={imgSrc}
          type={imgOptions}
          size={imgSize ? imgSize : 32}
        />
      );
  }
  //
  console.log({ btnClass, color, iconSrc });

  return (
    <>
      <div
        style={style}
        className={btnClass}
        onClick={enabled ? onClick : () => {}}
      >
        <span style={{ backgroundColor: color }}>
          {iconSrc || imgSrc ? mediaContent : ""}
          {btnText}
        </span>
      </div>
    </>
  );
};

export default NewButton;
