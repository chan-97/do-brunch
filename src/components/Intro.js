import React from "react";
import { IntroNotice } from "./IntroNotice";
import "./Intro.scss";

export function Intro() {
  return(
    <section className="intro">
      <h2 className="intro__heading">글이 작품이 되는 공간, 브런치</h2>
      <p className="intro__paragraph">
        <span>브런치에 담긴 아름다운 작품을 감상해 보세요.<br /></span>
        <span>그리고 다시 꺼내 보세요.<br /></span>
        <span>서랍 속 간직하고 있는 글과 감성을.</span>
      </p>
      <IntroNotice />
    </section>
  )
}