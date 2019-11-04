import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";

function CreditCardInfo() {
  const [flippedCard, setFlippedCard] = useState(false);
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { transform, opacity } = useSpring({
    opacity: !flippedCard ? 1 : 0,
    transform: `perspective(600px) rotateX(${!flippedCard ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const { cardHolder, cardNumber, expirationDate, cvv } = formData;
  return (
    <div className="wrapper">
      <div className="card">
        <animated.div
          className="card-front"
          style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
        >
          <div className="card__header">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
              className="card__chip"
            />
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
              className="card__type"
            />
          </div>

          <div style={props} className="card__number">
            {cardNumber ? cardNumber : "#### ##### ####"}
          </div>
          <div className="card__footer">
            <div className="info">
              <div className="label">Card Holder</div>
              <animated.div style={props} className="value">
                {cardHolder ? cardHolder : "Full Name"}
              </animated.div>
            </div>
            <div className="info">
              <div className="label"> Expired</div>
              <div className="value">{expirationDate ? expirationDate : "MM/YY"}</div>
            </div>
          </div>
        </animated.div>
        <animated.div className="card-back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          Back of the card
        </animated.div>
      </div>
      <div className="cardForm">
        <div className="card-input">
          <div className="card-input-label">Card Number:</div>

          <input
            type="number"
            value={cardNumber}
            onChange={e => updateFormData(e)}
            name="cardNumber"
            className="card-input-value"
          />
        </div>
        <div className="card-input">
          <div className="card-input-label">Card Holder Name:</div>
          <input
            type="text"
            name="cardHolder"
            value={cardHolder}
            onChange={e => updateFormData(e)}
            className="card-input-value"
          />
        </div>
        <div className="card-input-other">
          <div className="card-input">
            <div className="card-input-label">Expiration Date:</div>
            <input
              type="text"
              value={expirationDate}
              name="expirationDate"
              placeholder="MM/YY"
              onChange={e => updateFormData(e)}
              className="card-input-value"
            />
          </div>
          <div className="card-input">
            <div className="card-input-label">CVV:</div>

            <input
              type="text"
              value={cvv}
              name="cvv"
              onFocus={() => setFlippedCard(true)}
              onBlur={() => setFlippedCard(false)}
              onChange={e => updateFormData(e)}
              className="card-input-value"
            />
          </div>
        </div>
        <input type="submit" name="Submit" className="card-input-submit" />
      </div>
    </div>
  );
}

export default CreditCardInfo;
