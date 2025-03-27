import { useChatStore } from "../../store/questionStore";
import { LogoIcon } from "../../assets";
import { wrapLinksWithATag } from "../../util";

const AllAnswers = () => {
  const { messages } = useChatStore();

  return (
    <div className="h-[calc(100vh-250px)] overflow-y-auto">
      <div className="max-w-[768px] mx-auto px-6 py-10">
        {messages.map((message, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-end mb-4">
              <div className="bg-[#202222] rounded-[32px] px-5 py-3.5 w-fit max-md:max-w-[70vw] max-w-[600px]">
                <div className="text-[#BDC1C5] text-base">
                  {message.question}
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="size-10 max-sm:w-8 max-sm:h-8 flex items-center justify-center rounded-full border-2 border-[#3D3F40]">
                <LogoIcon />
              </div>
              <div
                className="text-[#BDC1C5] text-base text-balance flex-1"
                dangerouslySetInnerHTML={{
                  __html: wrapLinksWithATag(message.answer),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnswers;
