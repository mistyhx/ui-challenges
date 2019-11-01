import React from "react";
import "./style.scss";

function CreditCardInfo() {
  return (
    <div className="wrapper">
      <div className="card">
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
        <div className="card__number">49039 34093 4303 35353</div>
        <div className="card__footer">
          <div className="info">
            <div className="label">Card Holder</div>
            <div className="value">XIN HU</div>
          </div>
          <div className="info">
            <div className="label"> Expires</div>
            <div className="value">MM/YY</div>
          </div>
        </div>
      </div>
      <div className="cardForm">
        <div className="card-input">
          <div className="card-input-label">Card Number:</div>

          <input type="number" name="cardNumber" className="card-input-value" />
        </div>
        <div className="card-input">
          <div className="card-input-label">Card Holder Name:</div>
          <input type="text" name="cardHolder" className="card-input-value" />
        </div>
        <div className="card-input-other">
          <div className="card-input">
            <div className="card-input-label">Expiration Date:</div>
            <input type="text" name="expirationDate" placeholder="MM/YY" className="card-input-value" />
          </div>
          <div className="card-input">
            <div className="card-input-label">CVV:</div>

            <input type="text" name="cvv" className="card-input-value" />
          </div>
        </div>
        <input type="submit" name="Submit" className="card-input-submit" />
      </div>
    </div>
  );
}

export default CreditCardInfo;
