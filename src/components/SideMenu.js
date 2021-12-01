import React from "react";
import { CommonButton } from "./CommonButton";
import { SideMenuList } from "./SideMenuList";
import "./SideMenu.scss";

export function SideMenu({ isOpen, closeSideMenu, openLoginModal }) {
  return(
    <main className={`sidemenu ${isOpen && "sidemenu--active"}`}>
      <div className="sidemenu-service">
        <div className="sidemenu-service--top">
          <img 
            className="sidemenu-logo"
            alt="logo" 
            src="https://gameabout.com/files/attach/images/111/694/388/004/eced25cd7cf455a414af8480e4e00c6c.jpg"
          />
          <p className="sidemenu-slogan">
            You can make anything<br />
            by writing
          </p>
          <p className="sidemenu-slogan--writer">- C.S.Lewis -</p>
          <CommonButton 
            handleClickButton={openLoginModal}
            text="브런치 시작하기"
            isBlue={true}
          />
        </div>
        <SideMenuList closeSideMenu={closeSideMenu} />
      </div>
      <div 
        onClick={closeSideMenu}
        className="sidemenu-outside" 
      />
    </main>
  )
}