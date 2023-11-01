import { Line, Shadow } from "./utils";
import Curve from "../assets/purple_curve.svg";
import Chain from "../assets/chain.svg";
import Fire from "../assets/fire.svg";

const Hero = () => {
  return (
    <section className="text-white min-h-screen">
      <Line />
      <article className="container">
        <div className="mt-6 md:mt-8">
          <p className="text-[15px] italic font-bold text-right  md:text-[32px] md:pb-1 lg:[36px]">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            className="w-[115px] h-[7px] float-right md:w-[253px] md:h-[12px] "
            src={Curve}
            alt="#"
          />
        </div>

        <div className="relative text-center mt-6">
          <Shadow left={"100px"} top={"50px"} />
          <div className=" flex flex-col justify-center items-center">
            <h1 className="z-10">
              <span className="text-[32px] font-bold">getlinkedTech</span>
            </h1>
            <h1 className="z-50 flex items-center">
              <span className="text-[32px] font-bold">
                Hackathon<span className="text-[#D434FE]">1.0</span>
              </span>
              <img className="chain" src={Chain} alt="" />
              <img className="fire" src={Fire} alt="" />
            </h1>
            <p className="text-[13px] font-normal center">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
