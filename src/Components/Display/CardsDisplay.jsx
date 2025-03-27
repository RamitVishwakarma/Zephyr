import { Cards } from "./Cards";

// eslint-disable-next-line react/prop-types
const CardDisplay = ({ setShowAnswer }) => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-full lg:my-10">
        <h1 className="2xl:text-[52px] xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[24px] text-[#FFFFFF] font-bold tracking-wider text-center px-10 ">
          What do you want to know?
        </h1>
        <div className="flex justify-center max-sm:h-[calc(100vh-280px)] overflow-y-scroll scrollbar-hide">
          <Cards setShowAnswer={setShowAnswer} />
        </div>
      </div>
    </>
  );
};

export default CardDisplay;
