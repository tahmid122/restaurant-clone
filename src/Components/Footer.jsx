import React from "react";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="newsletter">
        <input type="text" placeholder="Subsscribe for newsletter" />
        <button>Subscribe</button>
      </div>
      <div className="copyright">
        &copy; <span>2024 Treact Inc. All Rights Reserved.</span>
      </div>
      <div className="sociallinks">
        <a href="#">
          <img src="./images/facebook.svg" alt="" />
        </a>
        <a href="#">
          <img src="./images/twitter.svg" alt="" />
        </a>

        <a href="#">
          <img src="./images/youtube.svg" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
