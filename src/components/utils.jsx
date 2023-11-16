import { Link } from "react-router-dom";
import Cross from "../assets/+.svg";

export const RegisterBtn = () => {
  return (
    <Link
      to={"/register"}
      className="register flex items-center justify-center w-[172px] md:w-[122px] lg:w-[172px] text-white"
    >
      Register
    </Link>
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

export const MobileForm = () => {
  return (
    <form className="pt-[20px]">
      <div className="flex flex-col mb-[25px]">
        <label htmlFor="team-name" className="text-[13px] font-normal mb-[5px]">
          Team's Name
        </label>
        <input
          type="text"
          placeholder="Enter the name of your group"
          className="rounded-[4px] text-[13px] border border-[#fff] bg-transparent px-[30px] py-[10px]"
        />
      </div>

      <div className="flex flex-col mb-[25px]">
        <label htmlFor="phone" className="text-[13px] font-normal mb-[5px]">
          Phone
        </label>
        <input
          type="number"
          placeholder="Enter your phone number "
          className="rounded-[4px] text-[13px] border border-[#fff] bg-transparent px-[30px] py-[10px]"
        />
      </div>

      <div className="flex flex-col mb-[25px]">
        <label htmlFor="email" className="text-[13px] font-normal mb-[5px]">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-[4px] text-[13px] border border-[#fff] bg-transparent px-[30px] py-[10px]"
        />
      </div>

      <div className="flex flex-col mb-[25px]">
        <label
          htmlFor="project-topic"
          className="text-[13px] font-normal mb-[5px]"
        >
          Project Topic
        </label>
        <input
          type="text"
          placeholder="Enter the name of your group"
          className="rounded-[4px] text-[13px] border border-[#fff] bg-transparent px-[30px] py-[10px]"
        />
      </div>

      <div className="flex justify-between mb-[10px]">
        <div className="flex flex-col">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="rounded-[4px] text-[13px] p-[10px] border border-[#fff] bg-transparent"
          >
            <option value="none">Select your category</option>
            <option value="fintech">Fintech</option>
            <option value="sdk">SDK</option>
            <option value="saas">SaaS</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="size">Group Size</label>
          <select
            name="size"
            id="size"
            className="rounded-[4px] text-[13px]  p-[10px] border border-[#fff] bg-transparent"
          >
            <option value="none">Select</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <p className="text-[#ff26b9] text-[9px] font-normal italic">
        Please review your registration details before submitting
      </p>

      <div className="my-[10px] flex items-start">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms" className="text-[10px] ml-[5px] font-normal">
          I agreed with the event terms and conditions and privacy policy
        </label>
      </div>

      <button type="submit" className="btn mt-[20px] block mx-auto w-[180px]">
        Submit
      </button>
    </form>
  );
};
