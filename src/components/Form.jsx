import { useState } from "react";

const RegisterForm = () => {
  const [checkbox, setCheckbox] = useState(false);

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
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
          name="terms"
          id="terms"
        />
        <label htmlFor="terms" className="text-[10px] ml-[5px] font-normal">
          I agreed with the event terms and conditions and privacy policy
        </label>
      </div>

      <button
        type="submit"
        className={
          !checkbox
            ? "unchecked  mt-[20px] block mx-auto w-[180px]"
            : "btn mt-[20px] block mx-auto w-[180px]"
        }
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
