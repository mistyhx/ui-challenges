import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";

const items = [
  {
    title: "Chongqing",
    url: "https://en.cifnews.com/wp-content/uploads/2019/06/Chengdu-chongqing_cluster.jpg",
    date: "12.05.2019",
    length: 7,
  },
  {
    title: "Beijing",
    url:
      "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555942795/production/city/hero_image_22_1555942794.jpg",
    date: "12.05.2019",
    length: 7,
  },
  {
    title: "Kunming",
    url: "https://pix10.agoda.net/geo/city/5445/1_5445_02.jpg?s=1920x822",
    date: "12.05.2019",
    length: 7,
  },
  {
    title: "Shanghai",
    url: "https://www.fodors.com/wp-content/uploads/2019/04/10UndertheRadarShanghai__HERO_shutterstock_351311348.jpg",
    date: "12.05.2019",
    length: 7,
  },
];

function StackedCards() {
  return (
    <div className="card-deck">
      {items.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundImage: `url(${item.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${index * 90}px)`,
          }}
        >
          <div className="content">
            <div className="info">
              <div className="date">{item.date}</div>
              <div className="length">{item.length} Days</div>{" "}
            </div>
            <div className="title">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StackedCards;
