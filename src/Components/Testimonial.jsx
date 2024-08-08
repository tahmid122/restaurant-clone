import React from "react";
import TcardData from "./TestimonialCard";
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="cU-left">
        <h1 style={{ fontSize: "50px" }}>
          Customers
          <span className="meal" style={{ marginLeft: "5px" }}>
            {" "}
            Love Us.
          </span>
        </h1>
      </div>

      <div className="testi-cards">
        {TcardData.map((single) => {
          const { image, desc, name } = single;
          return (
            <div
              className="testi-card"
              key={new Date().getTime().toString() * Math.random()}
            >
              <img src={image} alt={image} />
              <p>{desc}</p>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
