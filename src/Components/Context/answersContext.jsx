import React, { useContext, useState } from "react";

export const QuestionContext = React.createContext({
  Answers: {},
  makeAnswers: (data) => {},
});

export const QuestionContextProvider = ({ children }) => {
  const [Answers, setAnswers] = useState({
    question: [],
  });
  const [question, setQuestion] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);

  function wrapLinksWithATag(sentence) {
    const urlRegex = /https?:\/\/\S+/g;

    const modifiedSentence = sentence.replace(urlRegex, (url) => {
      return `<a href="${url}" className="text-blue-500" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    return modifiedSentence;
  }
  const makeAnswers = (data) => {
    const Newdata = { ...data, answer: wrapLinksWithATag(data.answer) };
    console.log(Newdata);
    setAnswers((questions) => {
      return (questions = {
        ...questions,
        question: [...questions.question, Newdata],
      });
    });
  };

  return (
    <QuestionContext.Provider
      value={{
        Answers,
        makeAnswers,
        question,
        setQuestion,
        isQuestion,
        setIsQuestion,
      }}>
      {children}
    </QuestionContext.Provider>
  );
};
