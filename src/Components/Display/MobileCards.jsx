import { useContext } from "react";
import { QuestionContext } from "../Context/answersContext";
export const Cards = ({ CardAns }) => {
  const { makeAnswers, question, setQuestion, isQuestion, setIsQuestion } =
    useContext(QuestionContext);

  const getAns = (ques) => {
    setQuestion(ques);
    CardAns(ques);
  };

  return (
    <>
      <div
        onClick={() => {
          getAns("Explain how can I get into GDSC");
        }}
        className="bg-[#1E1F20] cursor-pointer flex flex-col justify-between text-white text-sm w-[165px] h-[165px] p-3 text-left  rounded-[12px]"
      >
        <div className="text-[16px]">Explain how can I get into GDSC</div>
        <div className="flex flex-row-reverse">
          <div className="p-1 w-[32px] h-[32px] rounded-full bg-[#F94739] flex justify-center">
            <div className="pt-[0.20rem]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 5.66853C7.48016 5.25113 7.76998 4.89917 8.15145 4.67498C8.53291 4.45079 8.98141 4.36884 9.41751 4.44364C9.85361 4.51844 10.2492 4.74517 10.5341 5.08367C10.8191 5.42217 10.975 5.8506 10.9744 6.29306C10.9744 7.54213 9.10077 8.16667 9.10077 8.16667M9.12492 10.6667H9.13325M4.83333 14V15.9463C4.83333 16.3903 4.83333 16.6123 4.92436 16.7263C5.00352 16.8255 5.12356 16.8832 5.25045 16.8831C5.39636 16.8829 5.56973 16.7442 5.91646 16.4668L7.90434 14.8765C8.31043 14.5517 8.51347 14.3892 8.73957 14.2737C8.94017 14.1712 9.15369 14.0963 9.37435 14.051C9.62306 14 9.88308 14 10.4031 14H12.5C13.9001 14 14.6002 14 15.135 13.7275C15.6054 13.4878 15.9878 13.1054 16.2275 12.635C16.5 12.1002 16.5 11.4001 16.5 10V5.5C16.5 4.09987 16.5 3.3998 16.2275 2.86502C15.9878 2.39462 15.6054 2.01217 15.135 1.77248C14.6002 1.5 13.9001 1.5 12.5 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V10.6667C1.5 11.4416 1.5 11.8291 1.58519 12.147C1.81635 13.0098 2.49022 13.6836 3.35295 13.9148C3.67087 14 4.05836 14 4.83333 14Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          getAns("Tell me about the members of GDSC");
        }}
        className="bg-[#1E1F20] flex cursor-pointer flex-col justify-between text-white text-sm w-[165px] h-[165px] p-3 text-left  rounded-[12px]"
      >
        <div className="text-[16px]">Tell me about the members of GDSC</div>
        <div className="flex flex-row-reverse">
          <div className="p-1 w-[32px] h-[32px] rounded-full bg-[#48F08B] flex justify-center">
            <div className="pt-[0.20rem]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99955 11.5C5.35782 11.5 3.00855 12.7755 1.51288 14.755C1.19097 15.181 1.03002 15.394 1.03528 15.6819C1.03935 15.9043 1.17902 16.1849 1.35402 16.3222C1.58054 16.5 1.89444 16.5 2.52224 16.5H13.4769C14.1047 16.5 14.4186 16.5 14.6451 16.3222C14.8201 16.1849 14.9598 15.9043 14.9638 15.6819C14.9691 15.394 14.8081 15.181 14.4862 14.755C12.9906 12.7755 10.6413 11.5 7.99955 11.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99955 9C10.0706 9 11.7496 7.32107 11.7496 5.25C11.7496 3.17893 10.0706 1.5 7.99955 1.5C5.92848 1.5 4.24955 3.17893 4.24955 5.25C4.24955 7.32107 5.92848 9 7.99955 9Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          getAns("What is the role of Google within GDSC?");
        }}
        className="bg-[#1E1F20] flex   cursor-pointer flex-col justify-between text-white text-sm w-[165px] h-[165px] p-3 text-left  rounded-[12px]"
      >
        <div className="text-[16px]">
          What is the role of Google within GDSC?
        </div>
        <div className="flex flex-row-reverse">
          <div className="p-1 w-[32px] h-[32px] rounded-full bg-[#8FB3FF] flex justify-center">
            <div className="pt-[0.20rem]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16602 8.33331V13.3426C4.16602 13.6417 4.16602 13.7913 4.21156 13.9233C4.25184 14.0401 4.31757 14.1465 4.404 14.2347C4.50174 14.3345 4.63552 14.4014 4.90306 14.5352L9.40306 16.7852C9.62169 16.8945 9.73102 16.9491 9.84568 16.9707C9.94724 16.9897 10.0515 16.9897 10.153 16.9707C10.2677 16.9491 10.377 16.8945 10.5956 16.7852L15.0956 14.5352C15.3632 14.4014 15.497 14.3345 15.5947 14.2347C15.6811 14.1465 15.7469 14.0401 15.7871 13.9233C15.8327 13.7913 15.8327 13.6417 15.8327 13.3426V8.33331M1.66602 7.08331L9.70121 3.06571C9.81052 3.01105 9.86518 2.98372 9.92252 2.97297C9.97329 2.96344 10.0254 2.96344 10.0762 2.97297C10.1335 2.98372 10.1882 3.01105 10.2975 3.06571L18.3327 7.08331L10.2975 11.1009C10.1882 11.1556 10.1335 11.1829 10.0762 11.1936C10.0254 11.2032 9.97329 11.2032 9.92252 11.1936C9.86518 11.1829 9.81052 11.1556 9.70121 11.1009L1.66602 7.08331Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          getAns("Tell me about the events that GDSC organises");
        }}
        className="bg-[#1E1F20] flex flex-col justify-between cursor-pointer text-white text-sm w-[165px] h-[165px] p-3 text-left  rounded-[12px]"
      >
        <div className="text-[16px]">
          Tell me about the events that GDSC organises{" "}
        </div>
        <div className="flex flex-row-reverse">
          <div className="p-1 w-[32px] h-[32px] rounded-full bg-[#F4B4EA] flex justify-center">
            <div className="pt-[0.20rem]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 8.33366H2.5M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M6.5 18.3337H13.5C14.9001 18.3337 15.6002 18.3337 16.135 18.0612C16.6054 17.8215 16.9878 17.439 17.2275 16.9686C17.5 16.4339 17.5 15.7338 17.5 14.3337V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9001 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86502 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4339 2.77248 16.9686C3.01217 17.439 3.39462 17.8215 3.86502 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
