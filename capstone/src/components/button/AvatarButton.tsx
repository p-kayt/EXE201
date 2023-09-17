import React from 'react'
import Avatar from '../avatar/Avatar';

type AvatarBtnProps = {
  // theme: string;
  type: string;
  source: string;
  avatarType: "rounded" | "squared";
  size: number;
  btnText: string;
};

const AvatarButton = ({type, source, avatarType, size, btnText}:AvatarBtnProps) => {
  return (
    <>
        <div className={"button" + " " + type + " " + "with-avatar"}>
          <span>
            <Avatar source={source} type={avatarType} size={size}/>
            {btnText}
          </span>
        </div>
      
    </>
  )
}

export default AvatarButton