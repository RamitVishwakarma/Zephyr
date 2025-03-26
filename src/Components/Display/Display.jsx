import { Cards } from "./Cards";
import { useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
import { mockResponses } from "./mockResponse";
import axios from "axios";
var questions = {
  question: [],
};

const Display = (props) => {
  const { makeAnswers, setIsQuestion, setQuestion } = useContext(QuestionContext);
 
  const CardQuestion = (question) => {
  GetAns(question);
  };

  const GetAns = async (question) => {
    try {
      // const response = await axios.post(
      //   "https://jhvsq5i3ee.execute-api.us-east-1.amazonaws.com/prod/chat",  // Use full URL
      //   { question: question },
      //   {
      //     headers: {
      //      "Access-Control-Allow-Origin": "*",
      //       Authorization: "Bearer 2f74125481df4c363cce3fa358933fba",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      props.hideDisplay();
      setIsQuestion(false);
      
      const newQues = {
        question: question,
        answer: mockResponses[question] || response.data[0].answer,
      };

      makeAnswers(newQues);
      questions = {
       ...questions,
      question: [...questions.question, newQues],
};
      setQuestion("");
    } catch (error) {
      console.error("Error details:", error
      //   {
        
      //   message: error.message,
      //   code: error.code,
      //   response: error.response
      // }
      );
    }
  };


  return (
    <>
     <div className="w-[100%] h-[100%] justify-center hidden md:flex py-10">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex justify-center ">
             
                <h1 className="text-4xl w-[680px] h-[44px] pb-14 text-[#FFFFFF] font-bold tracking-wide " >
                  What do you want to know?
                </h1>
              
            </div>
          </div>

          <div className="flex gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>

      
      <div className="w-[100%] h-[100%] justify-center flex md:hidden py-10">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-start gap-1 p-2 px-6 ">
            <div className="flex justify-center">
              <div>
                <h1 className="md:text-[44px] text-[23px] text-white font-[700] ">
                  What do you want to know?
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 px-3 gap-2 py-4">
            <Cards CardAns={CardQuestion} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;




















