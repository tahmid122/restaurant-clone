import React from "react";

const Banner2 = () => {
  return (
    <section className="banner1" id="topBlog">
      <div className="b-right b2smimg">
        <img
          src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          alt=""
        />
      </div>

      <img src="images/dotdot.svg" alt="" className="circlethappa ctban2" />
      <div className="b-left b2down">
        <span
          style={{ color: "#6415ff", marginBottom: "15px", display: "block" }}
        >
          Established Since 2014
        </span>
        <h1>We've been serving for</h1>
        <span className="meal">Over 5 years.</span>
        <p style={{ width: "600px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ width: "600px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="b1-btns ">
          <div className="signUp">
            <button>Latest Offers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
