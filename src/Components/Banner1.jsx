import React from "react";

const Banner1 = () => {
  return (
    <section className="banner1" id="topBanner">
      <div className="b-left">
        <h1>Delicious & Affordable</h1>
        <span className="meal">Meals Near You.</span>
        <p style={{ width: "600px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="b1-btns ">
          <div className="signUp">
            <button>Order Now</button>
          </div>
          <div className="chefs">
            <a href="#">
              <img src="images/media.svg" alt="" />
              <span>Meet The Chefs</span>
            </a>
          </div>
        </div>
      </div>
      <div className="b-right">
        <img src="images/food (8).jpeg" alt="" />
      </div>
      <img src="images/circle.svg" alt="" className="kalathappa" />
      <img src="images/dotdot.svg" alt="" className="circlethappa" />
    </section>
  );
};

export default Banner1;
