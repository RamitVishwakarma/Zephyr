import { useState } from "react";
import Header from "../Header/Header";
import AllAnswers from "../Answers/answers";
import Footer from "../Footer/Footer";
import CardsDisplay from "../Display/CardsDisplay";
const HomePage = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url("/bg.png")',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        <Header />
        {showAnswer ? (
          <AllAnswers />
        ) : (
          <CardsDisplay setShowAnswer={setShowAnswer} />
        )}
        <Footer setShowAnswer={setShowAnswer} />
      </div>
    </div>
  );
};

export default HomePage;
