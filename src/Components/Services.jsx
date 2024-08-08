import React from "react";

const Services = () => {
  return (
    <section className="services">
      <div className="cU-left">
        <h1 style={{ fontSize: "50px" }}>
          Amazing
          <span className="meal" style={{ marginLeft: "5px" }}>
            {" "}
            Services.
          </span>
        </h1>
      </div>
      <div className="sub-service">
        <a href="#">
          <div className="sub-card">
            <img src="./images/shop.svg" alt="shop" />
            <h3>230+ Locations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <a href="#">
              Learn More <img src="./images/rightarrow.svg" alt="" />
            </a>
          </div>
        </a>

        <a href="#">
          <div className="sub-card">
            <img src="./images/chef.svg" alt="shop" />
            <h3>Professional Chefs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <a href="#">
              Learn More <img src="./images/rightarrow.svg" alt="" />
            </a>
          </div>
        </a>

        <a href="#">
          <div className="sub-card">
            <img src="./images/clebration.svg" alt="shop" />
            <h3>Birthday Cateering</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            <a href="#">
              Learn More <img src="./images/rightarrow.svg" alt="" />
            </a>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;
