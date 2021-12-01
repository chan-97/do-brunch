import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks";
import "./IntroNotice.scss";
import axios from "axios";

export function IntroNotice() {
  const [noticeList, setNoticeList] = useState([]);
  const [activeIndex] = useInterval(noticeList, 6000);

  useEffect(() => {
    axios.get("/data/introNotice.json")
    .then(res => setNoticeList(res.data));
  }, []);

  return(
    <ul className="notice">
      {noticeList.map((notice, idx) => {
        return(
          <li 
            className={`${activeIndex === idx ? "notice__list--active" : "notice__list"}`} 
            key={notice.title}
          >
            <span className="notice--state">{notice.state}</span>
            <span className="notice--title">{notice.title}</span>
          </li>
        )
      })}
    </ul>
  )
}