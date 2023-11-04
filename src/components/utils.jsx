import Cross from "../assets/+.svg";

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

export const QuestionAnswer = ({ obj }) => {
  return (
    <div className="mt-4">
      <div
        className="relative flex items-center w-full min-h-[42px] text-left cursor-pointer"
        onClick={(e) => {
          const parent = e.target.parentElement;
          parent.classList.toggle("show");
          console.log(e.target.parentElement);
        }}
      >
        <p className="text-[12px] font-normal leading-[18px] w-[80%] pointer-events-none ">
          {obj.q}
        </p>
        <img
          src={Cross}
          alt=""
          className="absolute right-3 bottom-3 pointer-events-none "
        />
      </div>

      <div className="answer text-left h-0 opacity-0 translate-y-[-20px] mb-3">
        <p className="text-[10px] font-normal leading-[15px] ">{obj.a}</p>
      </div>
      <p className="w-full h-[1px] bg-[#D434FE] "></p>
    </div>
  );
};
