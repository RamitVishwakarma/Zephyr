import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Input from "../Input/Input";
import AllAnswers from "../Answers/answers";
const Main = () => {
  const [showDisplay, setShowDisplay] = useState(true);

  const hide = () => {
    setShowDisplay(false);
  };

  return (
    <div className="relative h-screen">
  <div className="absolute inset-0 opacity-40"
    style={{
      backgroundImage: 'url("/image.png")', 
    }}
  />
  <div className="absolute inset-0 bg-black/50 " />
  <div className="flex flex-col h-full justify-between relative z-10">
    <div>
      <Header />
      {showDisplay ? <Display hideDisplay={hide} /> : <AllAnswers />}
    </div>
    <div>
      <Input hideDisplay={hide} />
    </div>
  </div>
</div>
  );
};

export default Main;
