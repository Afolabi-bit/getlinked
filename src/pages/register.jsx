import Image from "../assets/graphic-designer.png";
import Line from "../assets/dotted-line.svg";
import Woman from "../assets/woman-emoji.svg";
import Man from "../assets/man-emoji.svg";
import Check from "../assets/success-check.svg";
import SuccessMan from "../assets/success-man.svg";
import RegisterForm from "../components/Form";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Arrow from "../assets/arrow.svg";

const Register = () => {
  const mainRef = useRef(null);

  const removeConfirmation = () => {
    mainRef.current.classList.remove("done");
  };

  return (
    <main ref={mainRef} className="pb-[30px]">
      <article className="px-[2rem] py-[35px] md:px-[5rem]  lg:hidden ">
        <div className="flex items-start">
          <Link
            to={"/"}
            className="w-[30px] h-[30px] rounded-[100%] flex justify-center items-center back-btn mr-[40px]"
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
          <h2 className="text-[#d434fe] mb-[50px]">Register</h2>
        </div>
        <img src={Image} alt="#" className="" />
        <div className="md:w-[70%] md:mx-auto">
          <div className="flex items-baseline mt-[20px]">
            <p className="text-[12px] font-normal">
              Be part of this movement!{" "}
            </p>
            <div className="relative w-[90px] ml-[20px] flex justify-center items-baseline translate-y-1">
              <img src={Line} alt="#" className="absolute bottom-0 left-0" />
              <img src={Woman} alt="" />
              <img src={Man} alt="" />
            </div>
          </div>
          <p className="text-[20px] font-normal">CREATE YOUR ACCOUNT</p>
          <RegisterForm />
        </div>
      </article>

      {/* Pop Up */}
      <article className="pop-up h-screen w-screen bg-[#150e28e7]  justify-center items-center flex fixed top-0 left-[-110%]">
        <div className="border border-[#d434fe] rounded-[4px] w-[310px]  px-[30px] py-[30px] md:w-[500px]">
          <div className="relative   h-[190px]">
            <img
              src={Check}
              alt="#"
              className="absolute left-[6%] md:left-[18%] scale-[1.2]"
            />
            <img
              src={SuccessMan}
              alt="#"
              className="absolute right-[6%] top-[10px] md:right-[18%] scale-[1.2]"
            />
          </div>
          <p className="text-[16px] font-semibold  text-center mt-[20px] md:mt-[40px] ">
            Congratulations <br className="" /> you have successfully{" "}
            <br className="hidden" /> Registered!
          </p>
          <p className="text-[12px] font-medium mt-[30px] text-center">
            Yes, it was easy and you did it! <br className="md:hidden" /> check
            your mail box for next step
          </p>
          <Link
            to={"/"}
            onClick={removeConfirmation}
            className="btn pt-[12px] pb-[10px] px-[30px] mt-[20px] text-center  block w-full"
          >
            Back
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Register;
