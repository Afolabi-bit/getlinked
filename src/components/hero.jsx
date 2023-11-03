import { Line, RegisterBtn, Shadow } from "./utils";
import Curve from "../assets/purple_curve.svg";
import Chain from "../assets/chain.svg";
import Fire from "../assets/fire.svg";
import Bulb from "../assets/yellow_bulb.png";
import Man from "../assets/man-2.png";
import StarryBg from "../assets/starry_bg.svg";
import StarW from "../assets/star-white.svg";
import StarD from "../assets/star-dim.svg";

const Hero = () => {
  return (
    <section className="text-white min-h-full">
      <Line />

      <div className="mt-6 pr-[2rem] md:pr-[3rem] md:mt-8 lg:pr-[4.5rem]">
        <p className="text-[15px] italic font-bold text-right  md:text-[32px] md:pb-1 lg:[36px]">
          Igniting a Revolution in HR Innovation
        </p>
        <img
          className="w-[115px] h-[7px] float-right md:w-[253px] md:h-[12px] "
          src={Curve}
          alt="#"
        />
      </div>

      <article className=" flex flex-col items-center relative lg:pl-[4.5rem] lg:flex-row  w-full">
        <img
          src={StarW}
          alt="#"
          className="twinkle-2 absolute left-[25%] top-[20px]"
        />
        <img
          src={StarD}
          alt="#"
          className="twinkle absolute w-[6px] h-[8px] right-[15%] top-[15px]"
        />
        <img
          src={StarD}
          alt="#"
          className="twinkle-fast absolute w-[6px] h-[8px] right-[20%] top-[200px]"
        />
        <div className="relative text-center  mt-9 md:text-left">
          <Shadow left={"50px"} top={"70px"} />

          <div className=" flex flex-col justify-center items-center  lg:items-start ">
            <h1 className="z-10 relative">
              <span className="text-[32px] font-bold md:text-[50px] lg:text-[65px]">
                getlinkedTech
              </span>
              <img
                src={Bulb}
                alt="#"
                className="w-[18px] h-[26px] absolute right-[18px] top-[-12px] md:right-[32px] md:top-[-9px] md:w-[25px] md:h-[32px]"
              />
            </h1>

            <h1 className="z-50 flex items-center ">
              <span className="text-[32px] font-bold md:text-[50px] lg:text-[65px]">
                Hackathon<span className="text-[#D434FE]">1.0</span>
              </span>
              <img
                className="chain w-[33px] h-[33px] md:w-[55px] md:h-[55px] lg:w-[86px] lg:h-[86px]"
                src={Chain}
                alt=""
              />
              <img
                className="fire w-[22px] h-[22px] md:w-[38px] md:h-[38px] lg:w-[58px] lg:h-[58px]"
                src={Fire}
                alt=""
              />
            </h1>

            <p className="text-[13px] w-[80%] mb-6 font-normal center">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <RegisterBtn />

            <div className="count flex  gap-[20px] mt-2 md:mt-12">
              <p className="text-[48px]   font-normal">
                00<span className="text-[20px]">H</span>
              </p>
              <p className="text-[48px]  font-normal">
                00<span className="text-[20px]">M</span>
              </p>
              <p className="text-[48px]  font-normal">
                00<span className="text-[20px]">S</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden w-screen mt-4 md:w-[70%] lg:w-[50%]">
          <img src={Man} alt="" className="w-full" />
          <img
            src={StarryBg}
            alt=""
            className="absolute top-0 left-0 w-[378px] h-[355px] lg:top-[30px] lg:left-[-30px] lg:h-[450px] lg:w-[650px]"
          />
        </div>
      </article>

      <Line />
    </section>
  );
};

export default Hero;
