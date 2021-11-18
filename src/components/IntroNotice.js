import React, { useState, useEffect } from "react";
import "./IntroNotice.scss";
import axios from "axios";

export function IntroNotice() {
  const [noticeList, setNoticeList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("/data/introNotice.json")
    .then(res => setNoticeList(res.data));
  }, []);

  useEffect(() => {
    const activeTimeout = setTimeout(() => {
      setActiveIndex((prev) => {
        return prev === noticeList.length - 1 ? 0 : prev + 1;
      })
    }, 5000);

    return () => clearTimeout(activeTimeout);
  }, [activeIndex]);

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