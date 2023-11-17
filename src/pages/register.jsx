import Image from "../assets/graphic-designer.png";
import Line from "../assets/dotted-line.svg";
import Woman from "../assets/woman-emoji.svg";
import Man from "../assets/man-emoji.svg";
import Check from "../assets/success-check.svg";
import SuccessMan from "../assets/success-man.svg";
import RegisterForm from "../components/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <article className="px-[2rem] py-[25px]  md:hidden ">
        <h2 className="text-[#d434fe] mb-[50px]">Register</h2>
        <img src={Image} alt="#" className="" />
        <div className="flex items-baseline mt-[20px]">
          <p className="text-[12px] font-normal">Be part of this movement! </p>
          <div className="relative w-[90px] ml-[20px] flex justify-center items-baseline translate-y-1">
            <img src={Line} alt="#" className="absolute bottom-0 left-0" />
            <img src={Woman} alt="" />
            <img src={Man} alt="" />
          </div>
        </div>
        <p className="text-[20px] font-normal">CREATE YOUR ACCOUNT</p>
        <RegisterForm />
      </article>

      {/* Pop Up */}
      <article className="pop-up h-screen w-screen bg-[#150e28e7]  justify-center items-center flex fixed top-0 left-[-110%] ">
        <div className="border border-[#d434fe] rounded-[4px] w-[85%]  px-[30px] py-[30px]">
          <div className="relative   h-[190px]">
            <img src={Check} alt="#" className="absolute left-[6%]" />
            <img
              src={SuccessMan}
              alt="#"
              className="absolute right-[6%] top-[10px]"
            />
          </div>
          <p className="text-[16px] font-semibold  text-center mt-[20px] ">
            Congratulations <br /> you have successfully <br /> Registered!
          </p>
          <p className="text-[12px] font-medium mt-[30px] text-center">
            Yes, it was easy and you did it! <br /> check your mail box for next
            step
          </p>
          <Link
            to={"/"}
            className="btn py-[10px] px-[30px] mt-[20px] text-center  block w-full"
          >
            Back
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Register;
