import React, { useState } from "react";
import CardData from "./CardData";
const CheckOut = () => {
  const [active, setActive] = useState("starters");
  const [items, setItems] = useState(CardData);
  const buttons = ["Starters", "Main", "Soup", "Desserts"];
  const filterData = (cat) => {
    const updatedData = CardData.filter((curElm) => {
      return curElm.category === cat;
    });
    setItems(updatedData);
  };
  const allData = (title) => {
    if (title === "Starters") {
      setItems(CardData);
    }
  };
  return (
    <section className="checkout" id="pricing">
      <div className="cUpper">
        <div className="cU-left">
          <h1 style={{ fontSize: "50px" }}>
            Checkout our
            <span className="meal" style={{ marginLeft: "5px" }}>
              {" "}
              menu.
            </span>
          </h1>
        </div>
        <div className="cU-right">
          {buttons.map((menu, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setActive(menu);
                  filterData(menu);
                  allData(menu);
                }}
                className={active === menu ? "active" : ""}
              >
                {menu}
              </button>
            );
          })}
        </div>
      </div>
      <div className="cDown">
        <div className="cards">
          {items.map((card) => {
            const { id, image, title, desc, price, category } = card;
            return (
              <div className="card" key={id}>
                <div className="cardImg">
                  <img src={image} alt={image} />
                  <div className="badge">
                    <span className="star">&#9733;</span>
                    <span style={{ fontSize: "15px" }}>5.0</span>
                    <span style={{ color: "#243e63" }}>(87)</span>
                  </div>
                  <div className="cardOverly">
                    <div className="signUp">
                      <button>Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="cardDesc">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <h1>{price}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
