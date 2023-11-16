import Image from "../assets/graphic-designer.png";
import Line from "../assets/dotted-line.svg";
import Woman from "../assets/woman-emoji.svg";
import Man from "../assets/man-emoji.svg";
import RegisterForm from "../components/Form";

const Register = () => {
  return (
    <main>
      <article className="px-[3rem] py-[25px]  md:hidden ">
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
    </main>
  );
};

export default Register;
