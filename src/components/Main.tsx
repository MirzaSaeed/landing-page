import React from "react";
import Navbar from "./core/Navbar";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <FirstSection />
      <SecondSection />
    </React.Fragment>
  );
};

export default Main;
