import React from "react";

const Download = () => {
  return (
    <section className="download">
      <div className="d-flex">
        <div className="down-left">
          <span style={{ color: "#DDBD49", fontWeight: "bold" }}>
            Download App
          </span>
          <h2 style={{ fontSize: "28px", width: "650px" }}>
            People around you are ordering delicious meals using the
            <span
              className="meal"
              style={{
                marginLeft: "5px",
                height: "50px",
                fontSize: "25px",
                color: "#6415ff",
                backgroundColor: "white",

                fontWeight: "bold",
              }}
            >
              Treact App.
            </span>
          </h2>
          <div className="down-btn">
            <a href="#">
              <img src="./images/icon (1).png" alt="" /> <span>APP STORE</span>
            </a>
            <a href="#">
              <img src="./images/icon (2).png" alt="" /> <span>PLAY STORE</span>
            </a>
          </div>
        </div>
        <div className="down-right">
          <img src="./images/appSS.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Download;
