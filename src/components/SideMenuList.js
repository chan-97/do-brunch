import React from "react";
import "./SideMenuList.scss";

export function SideMenuList() {
  const { pathname } = window.location;
  const menuList = [
    { name: "브런치 홈", path: "/" },
    { name: "브런치 나우", path: "/now" }
  ];

  return(
    <ul className="sidemenu--list">
      {menuList.map((list) => {
        return(
          <li key={list.name} className={`sidemenu--listitem ${pathname === list.path && "list--active"}`}>
            <span className={`sidemenu--listitem-bar-left ${pathname === list.path && "bar--active"}`} />
            {list.name}
            <span className={`sidemenu--listitem-bar-right ${pathname === list.path && "bar--active"}`} />
          </li>
        )
      })}
    </ul>
  )
}