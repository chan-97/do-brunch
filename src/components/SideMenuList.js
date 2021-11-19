import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideMenuList.scss";

export function SideMenuList({ closeSideMenu }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuList = [
    { name: "브런치 홈", path: "/" },
    { name: "브런치 나우", path: "/now" }
  ];

  const movePage = (path) => {
    if(pathname !== path) {
      navigate(path);
      closeSideMenu();
    }
  }

  return(
    <ul className="sidemenu--list">
      {menuList.map((list) => {
        return(
          <li 
            onClick={() => movePage(list.path)}
            key={list.name} 
            className={`sidemenu--listitem ${pathname === list.path && "list--active"}`}
          >
            <span className={`sidemenu--listitem-bar-left ${pathname === list.path && "bar--active"}`} />
            {list.name}
            <span className={`sidemenu--listitem-bar-right ${pathname === list.path && "bar--active"}`} />
          </li>
        )
      })}
    </ul>
  )
}