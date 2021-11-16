import React from "react";
import { CommonButton } from "./CommonButton";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Nav.scss";

export function Nav() {
  return(
    <nav className="header">
      <div>
        <MenuOutlinedIcon style={{ marginRight: "0.625rem" }} />
        <img 
          className="header__logo"
          alt="logo" 
          src="https://news.nateimg.co.kr/orgImg/ni/2021/03/15/2103150905385390.jpg" 
        />
      </div>
      <div>
        <CommonButton />
      </div>
    </nav>
  )
}