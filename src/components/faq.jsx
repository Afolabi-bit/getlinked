import { Line, QuestionAnswer } from "./utils";
import StarW from "../assets/star-white.svg";
import StarD from "../assets/star-dim.svg";
import StarP from "../assets/star-purple.svg";
import StarG from "../assets/star-gra.svg";
import Image from "../assets/faq.png";

const Questions = [
  {
    q: "Can I work on a project I started before the hackathon?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora.",
  },
  {
    q: "What happens if I need help during the hackathon?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum recusandae quisquam rerum fuga laborum vitae laboriosam minima possimus. Maiores!",
  },
  {
    q: "What happens if I don't have an idea for a project?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora, ,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, qui!",
  },
  {
    q: "Can I join a team or do I have to come with one?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora ,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, qui!",
  },
  {
    q: "What happens after the hackathon ends",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora.",
  },
  {
    q: "Can I work on a project I started before the hackathon?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus optio pariatur quis eius! Nam sit harum deleniti nostrum tempora, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, qui!",
  },
];

const FAQ = () => {
  return (
    <section>
      <article className="my-[70px]  flex flex-col items-center lg:flex-row lg:gap-[40px] lg:px-[5rem]">
        {/* Text */}
        <div className="relative mb-[70px] text-center px-8  md:px-[3rem] lg:w-[50%] lg:text-left lg:mb-0">
          <img
            src={StarP}
            alt="#"
            className="absolute scale-[1] top-[-30px] left-[14%] twinkle-fast lg:left-[20px] lg:top-[-50px] "
          />
          <h2 className="mb-3 font-bold">
            <span className="text-white text-[20px] leading-[133%] md:text-[32px]">
              Frequently Asked
            </span>{" "}
            <br />
            <span className="text-[#d434fe] text-[20px] leading-[133%] md:text-[32px]">
              Questions
            </span>
          </h2>
          <p className="text-[12px] mx-auto font-bold leading-[27px] md:w-[75%] md:mx-0 ">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div className="mt-7 mx-auto md:w-[65%] lg:w-[100%] ">
            {Questions.map((question, ind) => {
              return <QuestionAnswer key={ind} obj={question} />;
            })}
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full min-h-[400px] md:min-h-[600px] md:mt-30px lg:min-h-[650px] lg:w-[50%] lg:mb-0">
          {/* Question marks */}
          <div className="absolute top-[18px] left-[70px] flex gap-[49px] md:left-[200px] md:top-[48px] md:gap-[70px] lg:left-[50px] lg:top-[110px] ">
            <img
              src={StarG}
              alt="#"
              className="absolute left-[67%] top-[-10px] twinkle-2"
            />

            <p className="question-mark text-[40px] font-medium text-[#A866FD] leading-[28px] md:text-[60px] lg:text-[96px]">
              ?
            </p>
            <p className="question-mark translate-y-[-30px] text-[64px] text-[#D434FE] font-medium leading-[28px] md:text-[90px] lg:text-[128px] lg:translate-y-[-50px] ">
              ?
            </p>
            <p className="question-mark text-[40px] font-medium text-[#A866FD] leading-[28px] md:text-[60px] lg:text-[96px]">
              ?
            </p>
          </div>
          <img
            src={StarD}
            alt="#"
            className="absolute left-[30px] top-[51%] twinkle-2 md:left-[15%] md:top-[58%] "
          />
          <img
            src={StarW}
            alt="#"
            className="absolute bottom-0 right-[17%] twinkle-fast "
          />
          <img
            src={StarG}
            alt="#"
            className="absolute top-[30%] left-[70px] scale-[.7] twinkle-fast md:left-[27%] lg:left-[20%] lg:top-[35%]"
          />
          <img
            src={Image}
            alt="#"
            className="absolute bottom-[0%] left-[50%] translate-x-[-50%]  z-10 md:w-[70%] lg:w-[100%]"
          />
        </div>
      </article>
      <Line />
    </section>
  );
};

export default FAQ;
