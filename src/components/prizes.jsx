import { Shadow } from "./utils";
import Trophy from "../assets/9486889.png";

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
        <div className="flex">
          <div className="relative w-1/3">
            <p>
              2nd <br />
              Runner
            </p>
            <p>N300,000</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PrizesAndRewards;
