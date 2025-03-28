import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Loader from "../Loader/Loader";
import { useChatStore } from "../../store/questionStore";
import { CircleAlert } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Footer = ({ setShowAnswer }) => {
  const { session_id, createChatSession, sendMessage } = useChatStore();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!session_id) {
      await createChatSession();
    }
    await sendMessage(question);
    setQuestion("");
    setLoading(false);
    setShowAnswer(true);
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <>
      <div className="w-[98vw] flex justify-center flex-col items-center fixed bottom-4 z-10">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="sm:w-[90vw] md:w-[70vw] w-[80vw] mx-auto max-w-[769px] rounded-[158px] bg-[#1E1F20] justify-start md:justify-between flex items-center relative">
            <input
              type="text"
              placeholder="Ask your question here..."
              className="h-[68px] p-[24px] text-[16px] text-white md:text-[20px] outline-none rounded-[158px] bg-[#1E1F20] w-[95%] max-[400px]:w-[88%]"
              onChange={handleChange}
              value={question}
            />
            {loading ? (
              <div className="absolute right-4 flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              <button
                type="submit"
                className={`absolute right-4 flex items-center justify-center ${
                  question.trim().length > 0
                    ? "opacity-100 cursor-pointer"
                    : "opacity-20 "
                }`}>
                <div className="w-[44px] h-[44px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3D87FF] to-[#D0C3FF] opacity-0.7"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ArrowUp />
                  </div>
                </div>
              </button>
            )}
          </div>
          <p className="mx-auto md:w-[70vw] md:text-sm sm:text-xs text-[10px] mt-[12px] max-w-[769px] text-center text-[#BDC1C5] px-3">
            <span className="inline-flex items-center gap-1">
              <CircleAlert className="sm:mr-1 size-4" />
              Zephyr may show incorrect details confirm with{" "}
              <a
                href="https://www.instagram.com/gdgoncampus.jss/"
                className="text-[#80B0FF]">
                our team
              </a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Footer;
