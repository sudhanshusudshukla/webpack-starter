import React from "react";
import { H1 } from "./App.styled";
import image from "./image_react.png";
import image2 from "./image_logo.svg";

const App = () => {
  return (
    <>
      <H1>hello react</H1>
      <img src={image} alt="react logo" width={200} height={200} />
      <img src={image2} alt="react logo" width={200} height={200} />
    </>
  );
};

export default App;
