import { GDGLogo } from "../../assets";

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full h-24 p-8 pb-6">
        <div className="flex gap-2 font-bold cursor-pointer">
          <GDGLogo />
          <div className="flex flex-col gap-1 text-[#BDC1C5] text-[16.855px]">
            <p className="font-bold leading-normal tracking-wider max-sm:hidden">
              Google Developer Groups OnCampus
            </p>
            <p className="text-xs tracking-wider max-sm:hidden">
              JSS Academy of Technical Education{" "}
            </p>
          </div>
        </div>

        <p className="text-[#BDC1C5] text-right text-xl font-normal tracking-wide cursor-pointer">
          Zephyr
        </p>
      </div>
    </>
  );
};

export default Header;
