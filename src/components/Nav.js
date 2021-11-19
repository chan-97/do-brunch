import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CommonButton } from "./CommonButton";
import { SideMenu } from "./SideMenu";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Nav.scss";

export function Nav() {
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);

  return(
    <nav className="header">
      <div>
        <MenuOutlinedIcon 
          onClick={() => setOpenSideMenu(true)}
          style={{ marginRight: "0.625rem" }} 
        />
        <Link to="/">
          <img 
            className="header__logo"
            alt="logo" 
            src="https://news.nateimg.co.kr/orgImg/ni/2021/03/15/2103150905385390.jpg" 
          />
        </Link>
      </div>
      <div>
        <CommonButton 
          text="시작하기"
          isBlue={false}
        />
      </div>
      <SideMenu
        isOpen={isOpenSideMenu}
        closeSideMenu={() => setOpenSideMenu(false)}
      />
    </nav>
  )
}