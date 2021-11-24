import React, { useState, useEffect } from "react";
import "./Now.scss";
import axios from "axios";

export function Now() {
  const [nowList, setNowList] = useState([]);

  useEffect(() => {
    axios.get("/data/brunchNow.json")
    .then(res => setNowList(res.data));
  }, []);

  const calculateTime = (timestamp) => {
    const lastTimeMinutes = Math.floor((Date.now() - timestamp) / 1000 / 60);
    if(lastTimeMinutes < 1) return "· 방금";
    if(1 <= lastTimeMinutes && lastTimeMinutes < 60) return `· ${lastTimeMinutes}분전`;
    if(60 <= lastTimeMinutes && lastTimeMinutes < 360) return `· ${Math.floor(lastTimeMinutes / 60)}시간전`;
    return "";
  }

  return(
    <ul className="now">
      {nowList.map((item) => {
        return(
          <li key={item.timestamp} className="now__listitem">
            <div className="now__listitem--content">
              <div>
                <h3 className="now__list-title">{item.title}</h3>
                  <p className="now__list-paragraph">{item.contents}</p>
              </div>
              <div className="now__list-writer">
                <span className="icon-by">by</span> {item.writer} {calculateTime(item.timestamp)}
              </div>
            </div>
            {item.image_src && 
            <img 
              className="now__list-image"
              alt="list-img" 
              src={item.image_src}
            />}
          </li>)
      })}
    </ul>
  )
}