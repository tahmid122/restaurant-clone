import React from "react";

const Banner2 = () => {
  return (
    <section className="banner1 banner3">
      <div className="b-left b2down">
        <span
          style={{ color: "#6415ff", marginBottom: "15px", display: "block" }}
        >
          A Reputed Brand
        </span>
        <h1>
          Why <span className="meal">Choose Us?</span>
        </h1>{" "}
        <p style={{ width: "600px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ width: "600px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="b1-btns ">
          <div className="signUp ban3">
            <button>Oder Now</button>
          </div>
        </div>
      </div>
      <div className="b-right b2smimg">
        <img src="./images/food (3).jpeg" alt="" />
      </div>

      <img src="images/dotdot.svg" alt="" className="circlethappa ctban3 " />
    </section>
  );
};

export default Banner2;
