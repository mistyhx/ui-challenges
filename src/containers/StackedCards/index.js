import React, { useState } from "react";
import { useTransition, useSpring, animated } from "react-spring";
import "./style.scss";

const cities = [
  {
    id: 1,
    title: "Chongqing",
    url: "https://en.cifnews.com/wp-content/uploads/2019/06/Chengdu-chongqing_cluster.jpg",
    date: "12.05.2019",
    length: 7,
  },
  {
    id: 2,
    title: "Beijing",
    url:
      "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555942795/production/city/hero_image_22_1555942794.jpg",
    date: "12.05.2019",
    length: 7,
  },
  {
    id: 3,
    title: "Kunming",
    url: "https://pix10.agoda.net/geo/city/5445/1_5445_02.jpg?s=1920x822",
    date: "12.05.2019",
    length: 7,
  },
  {
    id: 4,
    title: "Shanghai",
    url: "https://www.fodors.com/wp-content/uploads/2019/04/10UndertheRadarShanghai__HERO_shutterstock_351311348.jpg",
    date: "12.05.2019",
    length: 7,
  },
];

function StackedCards() {
  const [items, setItems] = useState(cities);
  const [propsScale, set] = useSpring(() => ({ s: 1 }));
  const transitions = useTransition(items, item => item.id, {
    from: { transform: "translate3d(0,200px,0)" },
    enter: { transform: "translate3d(0,-100px,0)" },
    trail: 200,
  });

  return (
    <div className="card-deck">
      <h1>Travel Destinations</h1>
      {transitions.map(({ item, props, id }) => (
        <animated.div key={id} style={props}>
          <animated.div
            onMouseMove={() => set({ s: 1.1 })}
            onMouseLeave={() => set({ s: 1 })}
            style={{ transform: propsScale.s.interpolate(s => ` scale(${s})`) }}
          >
            <div
              key={item.id}
              className="card"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                transform: `translateY(${item.id * 90}px)`,
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
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default StackedCards;
