import { Link } from "react-router-dom";
import { Shadow, Socials } from "../components/utils";

const Contact = () => {
  return (
    <section className="py-[2rem] px-[2rem]">
      <Link
        to={"/"}
        className="w-[30px] h-[30px] rounded-[100%] flex justify-center items-center back-btn"
      >
        <span className="bg-[#150E28] w-[26px] h-[26px] rounded-[100%] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            className="scale-[1.5]"
          >
            <path
              d="M4.26662 1.20001L1.19995 4.26668L4.26662 6.56668"
              stroke="white"
            />
          </svg>
        </span>
      </Link>
      <article>
        <Shadow dist={"contact-mobile-shadow"} />
        <h2 className="text-[#d434fe] text-[20px] font-semibold mt-[40px]">
          Questions or need <br /> assistance? <br />
          Let us know about it
        </h2>
        <p className="text-[12px] mt-[20px]">
          Email us below to any question related <br /> to our event
        </p>
        <form className="py-[30px]">
          <input
            type="text"
            placeholder="Team's Name"
            className="bg-transparent border border-white rounded-[4px] input-shadow w-full mb-[20px] px-[20px] py-[5px]"
          />
          <input
            type="text"
            placeholder="Topic"
            className="bg-transparent border border-white rounded-[4px] input-shadow w-full mb-[20px] px-[20px] py-[5px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent border border-white rounded-[4px] input-shadow w-full mb-[20px] px-[20px] py-[5px]"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="bg-transparent border border-white rounded-[4px] input-shadow w-full mb-[20px] p-[20px]"
          ></textarea>
          <button className="btn w-[150px] block mx-auto">Submit</button>
        </form>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[#d434fe] text-[12px] mb-2">Share on</h4>
          <Socials />
        </div>
      </article>
    </section>
  );
};

export default Contact;
