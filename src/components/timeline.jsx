import StarD from "../assets/star-dim.svg";
import StarW from "../assets/star-white.svg";
import StarP from "../assets/star-purple.svg";

const Timeline = () => {
  return (
    <section className="text-center relative w-full">
      <img
        src={StarD}
        alt="#"
        className="absolute twinkle-2 bottom-[60px] left-[2rem] md:bottom-[11rem] md:left-[30%]"
      />
      <img
        src={StarW}
        alt="#"
        className="absolute top-[50%] right-[20%] twinkle-fast"
      />
      <img
        src={StarP}
        alt="#"
        className="absolute twinkle-2 top-[16%] left-[22%] "
      />
      <article className="py-[70px] px-[2.5rem]  text-center ">
        <h2 className="mb-3 ">
          <span className="text-white text-[20px] font-bold leading-[133%] md:text-[32px]">
            Timeline
          </span>
        </h2>
        <p className="text-[14px] font-normal leading-[24px] md:w-[300px] mx-auto">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        {/* Timeline for Small screens */}
        <div className="mt-10 md:hidden">
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px]">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[77px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                1
              </p>
            </div>
            {/*  */}

            <div className="text-left">
              <div className="">
                <h3 className="text-[#D434FE] text-[12px] font-bold ">
                  Hackathon Announcement
                </h3>
                <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px] ">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[77px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                2
              </p>
            </div>
            {/*  */}
            <div className="text-left  w-[]">
              <h3 className="text-[#D434FE] text-[12px] font-bold ">
                Teams Registration begins
              </h3>
              <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px] ">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[77px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                3
              </p>
            </div>
            {/*  */}
            <div className="text-left flex flex-col justify-between h-[100px] w-[]">
              <div className="">
                <h3 className="text-[#D434FE] text-[12px] font-bold ">
                  Teams Registration ends
                </h3>
                <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px] ">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[90px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                4
              </p>
            </div>
            {/*  */}
            <div className="text-left w-[]">
              <h3 className="text-[#D434FE] text-[12px] font-bold ">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px] ">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[77px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                5
              </p>
            </div>
            {/*  */}

            <div className="text-left flex flex-col justify-between h-[100px] w-[]">
              <h3 className="text-[#D434FE] text-[12px] font-bold ">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}

          <div className="flex items-end gap-[15px] mb-[30px] ">
            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[77px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px] w-[19.3px] h-[19.3px] text-[12px] font-bold ">
                6
              </p>
            </div>
            {/*  */}

            <div className="text-left flex flex-col justify-between h-[100px] w-[]">
              <h3 className="text-[#D434FE] text-[12px] font-bold ">
                Demo Day
              </h3>
              <p className="mb-[10px] text-[12px] font-normal leading-[159.9%] ">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <h3 className="text-[12px] font-bold text-[#D434FE] ">
                November 18, 2023
              </h3>
            </div>
          </div>
          {/*  */}
        </div>

        {/* Timeline for medium and large screens */}
        <div className="hidden md:block mt-10 w-[650px] mx-auto">
          <div className="flex items-end gap-[45px] mb-[30px]">
            {/*  */}
            <div className="text-left w-[45%]">
              <div className="text-right translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Hackathon Announcement
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
            </div>
            {/*  */}

            <div className="flex flex-col items-center">
              <p className="w-[2px]  bg-[#D434FE] min-h-[97px] lg:min-h-[137px]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] flex justify-center items-center ">
                1
              </p>
            </div>
            {/*  */}
            <h3 className="text-left w-[45%] font-bold text-[#D434FE] text-[20px] lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}

          <div className="flex flex-row-reverse items-end gap-[45px] mb-[30px]">
            <div className=" w-[45%]">
              <div className="text-left translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Teams Registration begins
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[65px] lg:min-h-[86px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold  flex justify-center items-center text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] ">
                2
              </p>
            </div>

            <h3 className="text-[20px] text-right w-[45%] font-bold text-[#D434FE]  lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}

          <div className="flex items-end gap-[45px] mb-[30px]">
            {/*  */}
            <div className="text-left w-[45%]">
              <div className="text-right translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Teams Registration ends
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
            </div>
            {/*  */}

            <div className="flex flex-col items-center">
              <p className="w-[2px]  bg-[#D434FE] min-h-[65px] lg:min-h-[86px]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] flex justify-center items-center ">
                3
              </p>
            </div>
            {/*  */}
            <h3 className="text-left w-[45%] font-bold text-[#D434FE] text-[20px] lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}

          <div className="flex flex-row-reverse items-end gap-[45px] mb-[30px]">
            <div className=" w-[45%]">
              <div className="text-left translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Announcement of the accepted teams and ideas
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[65px] lg:min-h-[86px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold  flex justify-center items-center text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] ">
                4
              </p>
            </div>

            <h3 className="text-[20px] text-right w-[45%] font-bold text-[#D434FE]  lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}

          <div className="flex items-end gap-[45px] mb-[30px]">
            {/*  */}
            <div className="text-left w-[45%]">
              <div className="text-right  translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Getlinked Hackathon 1.0 Offically Begins
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
            </div>
            {/*  */}

            <div className="flex flex-col items-center">
              <p className="w-[2px]  bg-[#D434FE] min-h-[65px] lg:min-h-[86px]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] flex justify-center items-center ">
                5
              </p>
            </div>
            {/*  */}
            <h3 className="text-left w-[45%] font-bold text-[#D434FE] text-[20px] lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}

          <div className="flex flex-row-reverse items-end gap-[45px] mb-[30px]">
            <div className=" w-[45%]">
              <div className="text-left translate-y-[30%]">
                <h3 className="text-[#D434FE]  font-bold text-[18px] lg:text-[24px] ">
                  Demo Day
                </h3>
                <p className="font-normal leading-[159.9%] text-[12px] lg:text-[14px]">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="w-[2px] min-h-[65px] lg:min-h-[86px] bg-[#D434FE]"></p>
              <p className="mt-[10px] timeline-num rounded-[27px]  font-bold  flex justify-center items-center text-[18px] w-[35px] h-[35px] lg:text-[24px]  lg:w-[53px] lg:h-[53px] ">
                6
              </p>
            </div>

            <h3 className="text-[20px] text-right w-[45%] font-bold text-[#D434FE]  lg:text-[24px] ">
              November 18, 2023
            </h3>
          </div>
          {/*  */}
        </div>
      </article>
    </section>
  );
};

export default Timeline;
