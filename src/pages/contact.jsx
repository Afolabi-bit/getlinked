import { Link } from "react-router-dom";
import { Shadow, Socials } from "../components/utils";
import StarW from "../assets/star-white.svg";
import StarD from "../assets/star-dim.svg";
import StarP from "../assets/star-purple.svg";
import Header from "../components/header";

const Contact = () => {
  return (
    <section className="py-[2rem] px-[2rem] lg:p-0">
      <Link
        to={"/"}
        className="w-[30px] h-[30px] rounded-[100%] flex justify-center items-center back-btn lg:hidden"
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

      {/* Small screens */}
      <article className="relative md:w-[400px] md:mx-auto lg:hidden">
        <Shadow dist={"contact-mobile-shadow"} />
        <img
          src={StarP}
          alt="#"
          className="absolute top-[-20px] left-[60%] twinkle-2"
        />
        <img
          src={StarD}
          alt="#"
          className="absolute top-[15%] right-[5%] twinkle-fast"
        />
        <img
          src={StarW}
          alt="#"
          className="absolute right-[-20px] bottom-[30%] twinkle-fast"
        />
        <img
          src={StarP}
          alt="#"
          className="absolute bottom-[20%] left-[0] twinkle-2"
        />
        <div>
          <h2 className="text-[#d434fe] text-[20px] font-semibold mt-[40px]">
            Questions or need <br /> assistance? <br />
            Let us know about it
          </h2>
          <p className="text-[12px] mt-[20px]">
            Email us below to any question related <br /> to our event
          </p>
        </div>
        <form className="py-[30px] contact-form lg:w-[400px]">
          <input
            type="text"
            placeholder="Team's Name"
            className="bg-transparent  input-shadow  py-[5px]"
          />
          <input
            type="text"
            placeholder="Topic"
            className="bg-transparent  input-shadow  py-[5px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent  input-shadow  py-[5px]"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="bg-transparent  input-shadow w-full mb-[20px] p-[20px]"
          ></textarea>

          <button className="btn min-w-[150px] block mx-auto">Submit</button>
        </form>

        <div className="flex flex-col items-center justify-center lg:hidden">
          <h4 className="text-[#d434fe] text-[12px] mb-2">Share on</h4>
          <Socials />
        </div>
      </article>

      {/* Large screens */}
      <article className="hidden  lg:block">
        <Header />
        <div className="flex pt-[80px] px-[7rem] justify-between">
          <div>
            <h2 className="text-[#d434fe] text-[32px] font-semibold mb-[20px]">
              Get in touch
            </h2>
            <p className="text-[16px] font-normal mb-[20px]">
              Contact Information
            </p>
            <p className="text-[16px] font-normal mb-[20px]">
              27, Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
            <p className="text-[16px] font-normal mb-[20px]">
              Call Us: 07067981819
            </p>
            <p className="text-[16px] font-normal mb-[20px]">
              We are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>

            <div>
              <p className="text-[#d434fe] text-[16px] mb-[5px]">Share on</p>
              <Socials />
            </div>
          </div>

          <form className="w-[620px] bg-[#1C152E] p-[4rem] rounded-[4px]">
            <h2 className="text-[#d434fe] text-[20px] font-semibold mb-[20px]">
              Questions or need assistance? <br /> Let us know about it!
            </h2>
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border border-white w-full mb-[20px] py-[5px] px-[20px]"
            />
            <input
              type="email"
              placeholder="Mail"
              className="bg-transparent border border-white w-full mb-[20px] py-[5px] px-[20px]"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Message"
              className="bg-transparent border border-white w-full px-[20px] py-[5px]"
            ></textarea>
            <button className="btn w-[150px] block mx-auto">Submit</button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
