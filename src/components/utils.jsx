export const RegisterBtn = () => {
  return (
    <button className="register w-[172px] md:w-[122px] lg:w-[172px] text-white">
      Register
    </button>
  );
};

export const Line = () => {
  return <div className="w-screen h-[1px] bg-[#ffffff2e]"></div>;
};

export const Shadow = ({ dist }) => {
  return (
    <div className={`${dist} bg-shadow absolute z-[0] w-[1px] h-[1px]`}></div>
  );
};
