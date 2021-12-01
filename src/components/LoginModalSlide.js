import React from "react";
import { useInterval } from "../hooks";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./LoginModalSlide.scss";

export function LoginModalSlide({ loginModalSlide }) {
  const [activeIndex, { slideToPrev, slideToNext }] = useInterval(loginModalSlide, 4000);

  return(
    <ul>
      {loginModalSlide.map((content, idx) => {
        return(
          <li 
            className={activeIndex === idx ? "slide-item--active" : "slide-item"}
            key={content.subject}
          >
            <div className="slide__img-box">
              <img 
                className="slide__img"
                src={content.image_src}
                alt="slide"
              />
            </div>
            <div className="slide-text">
              <strong className="slide-subject">{content.subject}</strong>
              <span className="slide-explanation">
                {content.explanation_line_1}<br />
                {content.explanation_line_2}
              </span>
            </div>
          </li>)
      })}
      <div className="slide-paging-box">
        <ArrowBackIosOutlinedIcon 
          onClick={slideToPrev}
          style={{ width: "0.75rem", height: "0.75rem", color: "#b2b2b2" }} 
        />
        <ul className="slide-paging">
          {loginModalSlide.map((page, idx) => {
            return <li className={activeIndex === idx ? "slide-paging--active" : ""} key={page.subject} />
          })}
        </ul>
        <ArrowForwardIosOutlinedIcon 
          onClick={slideToNext}
          style={{ width: "0.75rem", height: "0.75rem", color: "#b2b2b2" }}
        />
      </div>
    </ul>
  )
}