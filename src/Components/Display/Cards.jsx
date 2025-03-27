import { ChatIcon, UserIcon, EducationIcon, CalendarIcon } from "../../assets";
import useChatStore from "../../store/questionStore";

// eslint-disable-next-line react/prop-types
export const Cards = ({ setShowAnswer }) => {
  const { createChatSession, sendMessage } = useChatStore();

  const cards = [
    {
      question: "Explain how can I get into GDSC",
      icon: "chat",
    },
    {
      question: "Tell me about the members of GDSC",
      icon: "user",
    },
    {
      question: "What is the role of Google within GDSC?",
      icon: "education",
    },
    {
      question: "Tell me about the events that GDSC organize",
      icon: "calendar",
    },
  ];

  const getIcon = (icon) => {
    switch (icon) {
      case "chat":
        return (
          <div className="size-8 p-1 bg-white/5 rounded-md text-white">
            <ChatIcon />
          </div>
        );
      case "user":
        return (
          <div className="size-8 p-1 bg-white/5 rounded-md text-white">
            <UserIcon />
          </div>
        );
      case "education":
        return (
          <div className="size-8 p-1 bg-white/5 rounded-md text-white">
            <EducationIcon />
          </div>
        );
      case "calendar":
        return (
          <div className="size-8 p-1 bg-white/5 rounded-md text-white">
            <CalendarIcon />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl mx-auto px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-center items-center"
          onClick={async () => {
            await createChatSession();
            await sendMessage(card.question);
            setShowAnswer(true);
          }}>
          <div
            className="rounded-[12px] p-0.5 group transition-all duration-500"
            style={{
              background:
                "linear-gradient(133.66deg, #888888 -10.53%, #171717 100%)",
            }}>
            <div className="relative w-[240px] aspect-square rounded-[12px] text-sm px-4 py-6 text-white flex flex-col gap-4 text-left cursor-pointer bg-[#181818] overflow-hidden transition-all duration-500 delay-300 group-hover:bg-gradient-to-br group-hover:from-[#181818] group-hover:via-[#738CD3]/90 group-hover:to-[#D480DC]/100">
              {/* Background image layer */}
              <div
                className="absolute inset-0 opacity-60 transition-all duration-500 object-cover"
                style={{
                  backgroundImage: `url("/bg.png")`,
                  backgroundSize: "100px 100px",
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-30 transition-all duration-500" />
              <div className="flex flex-col gap-4 relative z-10 py-6 px-3.5">
                <div className="">{getIcon(card.icon)}</div>
                <div className="text-lg font-normal leading-normal">
                  {card.question}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
