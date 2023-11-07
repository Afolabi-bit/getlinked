import { Shadow } from "./utils";
import Trophy from "../assets/9486889.png";
import gold from "../assets/gold_medal.png";
import silver from "../assets/silver_medal.png";
import bronze from "../assets/bronze_medal.png";

const PrizesAndRewards = () => {
  return (
    <section className="bg-[#110B20]  py-[70px] px-[3rem]">
      <Shadow dist={"prizes-shadow-top"} />
      <h2 className="text-center mb-3">
        <span className="text-[20px] font-bold">Prizes and</span>
        <br />
        <span className="text-[20px] font-bold text-[#d434fe]">Rewards</span>
      </h2>
      <p className="text-center text-[12px] font-normal leading-[171%] ">
        Highlight of the prizes or rewards for winners and for participants.
      </p>
      <article className="flex mt-[40px] flex-col">
        <img src={Trophy} alt="#" />

        <div className="flex justify-center items-center gap-[15px] mt-[120px]">
          <div className="relative w-[90px] h-[126px] pb-[20px] rounded-[8px] border border-[#d434fe] flex flex-col  bg-[#d634fe17]">
            <img src={silver} alt="" className="absolute left-0 top-[-50px]" />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                2nd <br />
                Runner
              </p>
              <p className="text-[14px] font-bold text-[#d434fe]">N300,000</p>
            </div>
          </div>

          <div className="relative w-[90px] h-[148px] pb-[20px] rounded-[8px] border border-[#d434fe] flex flex-col  bg-[#d634fe17]">
            <img
              src={gold}
              alt=""
              className="absolute left-0 top-[-50px] scale-[1.3]"
            />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                1st <br />
                Runner
              </p>
              <p className="text-[14px] font-bold text-[#d434fe]">N400,000</p>
            </div>
          </div>

          <div className="relative w-[90px] h-[126px] pb-[20px] rounded-[8px] border border-[#d434fe] flex flex-col  bg-[#d634fe17]">
            <img src={bronze} alt="" className="absolute left-0 top-[-50px]" />
            <div className="text-center flex flex-col h-full items-center justify-end ">
              <p className="text-[12px] font-semibold ">
                3rd <br />
                Runner
              </p>
              <p className="text-[14px] font-bold text-[#d434fe]">N150,000</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PrizesAndRewards;
