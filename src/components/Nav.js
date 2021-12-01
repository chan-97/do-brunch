import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CommonButton } from "./CommonButton";
import { SideMenu } from "./SideMenu";
import { LoginModal } from "./LoginModal";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Nav.scss";
import axios from "axios";

export function Nav() {
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);
  const [isOpenLoginModal, setOpenLoginModal] = useState(false);
  const [loginModalSlide, setLoginModalSlide] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    axios.get("/data/loginModalSlide.json")
    .then(res => setLoginModalSlide(res.data));
  }, []);

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
      {pathname === "/now" && <span className="header--title">브런치 나우</span>}
      <div>
        {pathname === "/" &&
          <CommonButton 
            text="시작하기" 
            isBlue={false} 
            handleClickButton={() => setOpenLoginModal(true)}
          />
        }
      </div>
      <SideMenu
        isOpen={isOpenSideMenu}
        closeSideMenu={() => setOpenSideMenu(false)}
        openLoginModal={() => setOpenLoginModal(true)}
      />
      <LoginModal 
        isOpen={isOpenLoginModal}
        closeLoginModal={() => setOpenLoginModal(false)}
        loginModalSlide={loginModalSlide}
      />
    </nav>
  )
}