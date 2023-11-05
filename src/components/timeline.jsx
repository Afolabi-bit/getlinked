import { Line } from "./utils";

const Timeline = () => {
  return (
    <section className="text-center w-full">
      <article className="py-[70px] px-[2.5rem]  text-center ">
        <h2 className="mb-3 ">
          <span className="text-white text-[20px] font-bold leading-[133%] md:text-[32px]">
            Timeline
          </span>
        </h2>
        <p className="text-[14px] font-normal leading-[24px] ">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="mt-5">
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
        </div>
      </article>
      <Line />
    </section>
  );
};

export default Timeline;
