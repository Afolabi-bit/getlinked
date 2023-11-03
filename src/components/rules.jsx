import StarW from "../assets/star-white.svg";
import StarP from "../assets/star-purple.svg";
import Image from "../assets/7450159.png";
import { Line } from "./utils";

const Rules = () => {
  return (
    <section className="w-screen pt-10">
      <article className="w-full flex flex-col  lg:flex-row-reverse lg:justify-between lg:gap-[40px] lg:px-[5rem]">
        <div className="w-full min-h-[320px] relative  mb-10  md:min-h-[550px] lg:w-[40%] lg:mb-0">
          <img
            src={StarW}
            alt="#"
            className="twinkle-fast absolute  top-[50%] left-[30px] translate-y-[-50%] md:left-[18%]"
          />
          <img
            src={Image}
            alt="#"
            className=" w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  md:w-[80%] lg:w-[100%]"
          />
        </div>

        <div className="text-center px-8 relative mb-[50px] md:px-[3rem] 0 lg:w-[50%] lg:text-left">
          <img
            src={StarP}
            alt="#"
            className="twinkle-2 absolute top-[40px] right-[48px]"
          />
          <img
            src={StarW}
            alt="#"
            className="twinkle absolute left-[30%] bottom-[-25px]"
          />
          <h2 className="mb-3 ">
            <span className="text-white text-[20px] font-bold leading-[133%] md:text-[32px]">
              Rules and
            </span>{" "}
            <br />
            <span className="text-[#d434fe] text-[20px] font-bold leading-[133%] md:text-[32px]">
              Guidelines
            </span>
          </h2>

          <p className="lg:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </article>
      <Line />
    </section>
  );
};

export default Rules;
