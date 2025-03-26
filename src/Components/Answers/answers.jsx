import { QuestionContext } from "../Context/answersContext";
import { useContext, useRef } from "react";
import { LogoIcon } from "../Display/IconsSvg";
import parse from "html-react-parser";

import profile from "../../assets/profile.svg";
const AllAnswers = () => {
  const { Answers } = useContext(QuestionContext);
  const parseAnswer = (answer) => {
    const finalAnswer = answer.replace(/\n/g, "<br/>");
    return <div dangerouslySetInnerHTML={{ __html: finalAnswer }} />;
  };

  return (
    <div className="w-full overflow-x-hidden ">
    <div className=" flex flex-col h-[calc(100vh-250px)] ">
      
      <div className=" overflow-y-auto scrollbar-none ">
        <div className="max-w-[680px] mx-auto px-4 py-10">
          {Answers.question.map((elem, i) => (
            <div key={i} className="mb-6">
              
              <div className="flex justify-end mb-4 ">
                <div className="bg-[#202222] rounded-[32px] p-2 w-[262px]">
                  <div className="text-[#BDC1C5] text-base text-center font-normal leading-7">
                    {elem.question}
                  </div>
                </div>
              </div>

              <div className="flex gap-5 ">
                <div className=" w-[40px] h-[40px]  flex items-center justify-center rounded-[32px] border-2 border-[#3D3F40] ">
      
                   <LogoIcon/>
                   
                </div>
                <div className="text-[#BDC1C5] flex-1  text-base font-normal leading-7 max-w-[620px]">
                  {elem.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default AllAnswers;
