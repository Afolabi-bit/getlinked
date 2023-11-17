import { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const RegisterForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [team, setTeam] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState(2);

  const formRef = useRef(null);

  const hackathonRef = collection(db, "hackathon");

  const formSubmit = async (e) => {
    e.preventDefault();
    let add;
    try {
      add = await addDoc(hackathonRef, {
        team,
        phone,
        email,
        topic,
        category,
        size,
      });
      setCategory("");
      setTeam("");
      setTopic("");
      setPhone(0);
      setEmail("");
      setSize(2);
    } catch (err) {
      console.error(err);
    }
    if (add.type == "document") {
      console.log(formRef.current.parentElement.parentElement.parentElement);
      formRef.current.parentElement.parentElement.parentElement.classList.add(
        "done"
      );
    }
  };

  return (
    <form
      onSubmit={(e) => formSubmit(e)}
      ref={formRef}
      className="pt-[20px] md:bg-[#1C152E] md:rounded-[4px] md:px-[20px] md:pb-[20px] md:mt-[30px]"
    >
      <div className="flex flex-col mb-[25px]">
        <label htmlFor="team-name" className="text-[13px] font-normal mb-[5px]">
          Team's Name
        </label>
        <input
          type="text"
          onChange={(e) => setTeam(e.target.value)}
          required
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
          onChange={(e) => setPhone(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setTopic(e.target.value)}
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
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-[4px] text-[13px] p-[10px] border border-[#fff] bg-transparent md:w-[200px]"
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
            onChange={(e) => setSize(e.target.value)}
            className="rounded-[4px] text-[13px]  p-[10px] border border-[#fff] bg-transparent md:w-[150px]"
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
