import React, { useState, useEffect } from "react";
import "./IntroNotice.scss";
import axios from "axios";

export function IntroNotice() {
  const [noticeList, setNoticeList] = useState([]);
  const [listItem, setListItem] = useState({});

  useEffect(() => {
    axios.get("/data/introNotice.json")
    .then(res => console.log(res.data))

    // 1. axios.get 받아와서 setNoticeList
    // 2. noticeList 의 length 가 0 이상이면 setInterval 걸어서 setListItem(noticeList[n])

  }, []);

  return(
    <ul className="notice">
      <li>
        <span className="notice--state">Notice</span>
        <span className="notice--title">[사전 안내] SNS '공유 수' 기능 종료</span>
      </li>
    </ul>
  )
}