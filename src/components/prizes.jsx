import { Shadow } from "./utils";

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
    </section>
  );
};

export default PrizesAndRewards;
