import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Banner1 from "./Components/Banner1";
import Banner2 from "./Components/Banner2";
import Banner3 from "./Components/Banner3";
import CheckOut from "./Components/CheckOut";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner1 />
      <Banner2 />
      <CheckOut />
      <Services />
      <Banner3 />
      <Testimonial />
      <Download />
      <Footer />
    </>
  );
};

export default App;
