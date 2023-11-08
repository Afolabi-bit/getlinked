import { Shadow } from "./utils";
import Trophy from "../assets/9486889.png";
import gold from "../assets/gold_medal.png";
import silver from "../assets/silver_medal.png";
import bronze from "../assets/bronze_medal.png";
import StarG from "../assets/star-gra.svg";
import StarW from "../assets/star-white.svg";
import StarD from "../assets/star-dim.svg";

const PrizesAndRewards = () => {
  return (
    <section className=" relative bg-[#110B20]  py-[70px] px-[3rem] lg:px-[4rem] lg:pt-[190px]">
      <Shadow dist={"prizes-top"} />
      <Shadow dist={"prizes-bottom"} />

      <img
        src={StarG}
        alt="#"
        className="absolute left-[50px] top-[30px] twinkle-fast md:left-[20%] md:top-[10%] "
      />

      <img
        src={StarG}
        alt="#"
        className="absolute right-[25%] top-[100px] twinkle-2 "
      />

      <div className="lg:hidden">
        <h2 className="text-center mb-3">
          <span className="text-[20px] font-bold">Prizes and</span>
          <br />
          <span className="text-[20px] font-bold text-[#d434fe]">Rewards</span>
        </h2>
        <p className="text-center text-[12px] font-normal leading-[171%] ">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <article className="flex mt-[40px] flex-col lg:flex-row">
        <img
          src={Trophy}
          alt="#"
          className=" w-[321px] mx-auto md:w-[400px] lg:w-[500px]"
        />

        <div className="relative flex justify-center items-center gap-[15px] mt-[120px]">
          <div className="hidden lg:block lg:w-[300px] absolute top-[-270px] left-[50%] translate-x-[-50%] text-left">
            <h2 className=" mb-3">
              <span className="text-[20px] font-bold">Prizes and</span>
              <br />
              <span className="text-[20px] font-bold text-[#d434fe]">
                Rewards
              </span>
            </h2>
            <p className=" text-[12px] font-normal leading-[171%] ">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <img
            src={StarW}
            alt="#"
            className="absolute top-[-130px] left-[20px] md:left-[15%]"
          />
          <img
            src={StarW}
            alt="#"
            className="absolute top-[-70px] right-[20px]"
          />
          <div className="relative w-[90px] h-[126px] pb-[20px] rounded-[8px] border border-[#d434fe] flex flex-col  bg-[#d634fe17] md:w-[120px] md:h-[170px] lg:w-[180px] lg:h-[250px]">
            <img
              src={silver}
              alt=""
              className="absolute left-0 top-[-50px] lg:top-[-90px]"
            />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                <span className="lg:text-[32px] lg:font-bold">2nd </span>
                <br />
                <span className="lg:text-[24px] lg:font-semibold">Runner</span>
              </p>
              <p className="text-[14px] font-bold text-[#d434fe] lg:text-[32px]">
                N300,000
              </p>
            </div>
          </div>

          <div className="relative w-[90px] h-[148px] pb-[20px] rounded-[8px] border border-[#903AFF] flex flex-col  bg-[#8f3aff15] md:w-[120px] md:h-[228px] md:pb-[30px] lg:w-[180px] lg:h-[300px]">
            <img
              src={gold}
              alt=""
              className="absolute left-0 top-[-50px] scale-[1.3] md:scale-[1.4] lg:translate-y-[-30px]"
            />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                <span className="lg:text-[32px] lg:font-bold">1st </span>
                <br />
                <span className="lg:text-[24px] lg:font-semibold">Runner</span>
              </p>
              <p className="text-[14px] font-bold text-[#903AFF] lg:text-[32px]">
                N400,000
              </p>
            </div>
          </div>

          <div className="relative w-[90px] h-[126px] pb-[20px] rounded-[8px] border border-[#d434fe] flex flex-col  bg-[#d634fe17] md:w-[120px] md:h-[170px] lg:w-[180px] lg:h-[250px]">
            <img
              src={bronze}
              alt=""
              className="absolute left-0 top-[-50px] lg:top-[-90px]"
            />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                <span className="lg:text-[32px] lg:font-bold">3rd </span>
                <br />
                <span className="lg:text-[24px] lg:font-semibold">Runner</span>
              </p>
              <p className="text-[14px] font-bold text-[#d434fe] lg:text-[32px]">
                N150,000
              </p>
            </div>
          </div>

          <img
            src={StarD}
            alt="#"
            className="right-[20%] absolute bottom-[-30px] twinkle-2"
          />
        </div>
      </article>
    </section>
  );
};

export default PrizesAndRewards;
