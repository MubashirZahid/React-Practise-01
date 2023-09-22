import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import BoxContainer from "./components/BoxContainer";
import Footer from "./components/Footer";

function App() {
  console.log("Rendering from App.jsx file");

  return (
    <div>
      <Header />
      <Banner />
      <BoxContainer />
      <Footer />

      {/* <div>
        <h1>React Introduction</h1>
        <p>Hello World</p>
        <p>Some basic components</p>
      </div> */}
    </div>
  );
}

export default App;
