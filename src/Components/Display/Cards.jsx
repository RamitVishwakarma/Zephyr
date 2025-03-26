import { useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
import { getIcon } from "./IconsSvg";
export const Cards = ({ CardAns }) => {
  const { makeAnswers, question, setQuestion, isQuestion, setIsQuestion } =
    useContext(QuestionContext);

  const getAns = (ques) => {
    setIsQuestion(true);
    setQuestion(ques);
    CardAns(ques);
  };

  const cards = [
    {
      question: "Explain how can I get into GDSC",
      icon: "chat",
      gradientColors: ["#181818", "#1D1E22", "#38425D", "#738CD3", "#D480DC"]
    },
    {
      question: "Tell me about the members of GDSC",
      icon: "user",
      gradientColors: ["#181818", "#1D1E22", "#38425D", "#738CD3", "#D480DC"]
    },
    {
      question: "What is the role of Google within GDSC?",
      icon: "education",
      gradientColors: ["#181818", "#1D1E22", "#38425D", "#738CD3", "#D480DC"]
    },
    {
      question: "Tell me about the events that GDSC organize",
      icon: "calendar",
      gradientColors: ["#181818", "#1D1E22", "#38425D", "#738CD3", "#D480DC"]
    }
  ];

  return (
    <>
    <div className="w-full h-full flex flex-col">
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-400px)]  scrollbar-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
            
{cards.map((card, index) => (
  <div 
  key={index}
    className=" w-[155px] h-[155px] rounded-[12px] p-[2px] group "
    style={{
      background: 'linear-gradient(133.66deg, #888888 -10.53%, #171717 100%)',
    }}
  >
    <div
      onClick={() => getAns(card.question)}
      className="relative w-full h-full rounded-[12px] text-sm px-4 py-6 text-white flex flex-col gap-4 text-left cursor-pointer bg-[#181818] overflow-hidden transition-all duration-500  delay-300 group-hover:bg-gradient-to-br group-hover:from-[#181818] group-hover:via-[#738CD3]/90  group-hover:to-[#D480DC]/100 group-hover:via-70% group-hover:to-90%"
    >
      <div
        className="absolute inset-0 bg-repeat opacity-100"
        style={{
          backgroundImage: `url("/image.png") `,
           backgroundSize: '100px 100px',

        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-30 " />
      <div className=" bg-white/08 flex ">
        {getIcon(card.icon)}
      </div>
      <div className="text-sm font-normal w-[123px] h-[38px]">
        {card.question}
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
      
      </>
    
  );
};

