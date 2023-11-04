import BigIdea from "../assets/big.png";
import Arrow from "../assets/arrow.svg";
import StarG from "../assets/star-gra.svg";
import StarP from "../assets/star-purple.svg";
import { Line } from "./utils";

const Intro = () => {
  return (
    <section className="w-screen">
      <article className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:gap-[20px] lg:px-[5rem]">
        <div className=" w-full min-h-[320px]  mb-10 relative md:min-h-[750px] lg:min-h-[650px] lg:w-[40%] lg:mb-0">
          <p className="z-10 absolute w-full top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-20%] text-white text-[14px] font-bold md:text-[20px] ">
            The Big <br /> Idea!
          </p>
          <img
            src={BigIdea}
            alt="#"
            className="absolute w-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[70%] md:mb-[50px] lg:w-[100%]"
          />
          <img
            src={Arrow}
            alt="#"
            className="z-[100] rotate-[-17deg] w-[19.5px] h-[23px] absolute bottom-[-5px] left-[50%] translate-x-[-50%] md:bottom-[40px] lg:left-[95%] lg:w-[30px] lg:h-[38px] "
          />
          <img
            src={StarG}
            alt="#"
            className="twinkle absolute top-[37%] left-[16%] w-[11px] h-[13px]"
          />
        </div>

        <div className="text-center px-8 relative mb-[70px] md:px-[3rem] 0 lg:w-[50%] lg:text-left">
          <img
            src={StarP}
            alt=""
            className="twinkle-2 absolute w-[8px] h-[10px] top-[28px] right-[50px] md:top-[35px] md:right-[18%]"
          />

          <h2 className="mb-3 ">
            <span className="text-white text-[20px] font-bold leading-[133%] md:text-[32px]">
              Introduction to getlinked
            </span>{" "}
            <br />
            <span className="text-[#d434fe] text-[20px] font-bold leading-[133%] md:text-[32px]">
              tech Hackathon 1.0
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

export default Intro;
