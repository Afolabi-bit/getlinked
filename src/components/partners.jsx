import { Line } from "./utils";
import LA from "../assets/liberty_assured.png";
import LP from "../assets/liberty_pay.png";
import Whisper from "../assets/whisper.png";
import Winwise from "../assets/winwise.png";

const Partners = () => {
  return (
    <section className="">
      <article className="py-[70px] flex flex-col items-center">
        <div className="w-[80%] mx-auto mb-[40px] text-center">
          <h2 className="text-[20px] font-bold leading-[27.5px]">
            Partners and Sponsors
          </h2>
          <p className="text-[12px]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="w-[80%] h-40 border py-[30px] rounded-[5px] border-[#d434fe]">
          <div className="flex justify-center translate-x-[2px] mb-[10px] w-full">
            <div className="w-[30%] flex justify-center">
              <img
                src={LA}
                alt="#"
                className="w-[32px] h-[30px] object-cover"
              />
            </div>

            <div className="w-[30%] flex justify-center items-center">
              <img
                src={LP}
                alt="#"
                className="w-[57px]  h-[10px] object-cover"
              />
            </div>

            <div className="flex justify-center w-[30%]">
              <img
                src={Winwise}
                alt="#"
                className="w-[35px] h-[28px] object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <p className="w-[68px] h-[2px] bg-[#d434fe]"></p>
            <p className="w-[68px] h-[2px] bg-[#d434fe] mx-6"></p>
            <p className="w-[68px] h-[2px] bg-[#d434fe]"></p>
          </div>

          <div className="flex justify-center translate-x-[2px] mt-[10px] w-full">
            <div className="w-[30%] flex justify-center">
              <img
                src={Whisper}
                alt="#"
                className="w-[39px] h-[30px] object-cover"
              />
            </div>

            <div className="w-[30%] flex justify-center items-center">
              <p className="font text-[12px] font-normal leading-[27.5px]">
                pay<span className="text-[#00A3FF]">box</span>{" "}
              </p>
            </div>

            <div className="relative flex items-center justify-center w-[30%]">
              <p className="text-[12px] volkhov font-normal">
                Vuzual <span className="text-[#f00]">Plus</span>
              </p>
              <span className="voces text-[4px] absolute bottom-[2px] right-[15px]">
                Design Studios
              </span>
            </div>
          </div>
        </div>
      </article>
      <Line />
    </section>
  );
};

export default Partners;
