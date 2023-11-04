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
      <article className="my-[70px]  flex flex-col items-center">
        <div className="relative mb-[70px] text-center px-8  md:px-[3rem] lg:w-[50%] lg:text-left lg:mb-0">
          <img
            src={StarP}
            alt="#"
            className="absolute scale-[1] top-[-30px] left-[14%] twinkle-fast"
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
          <p className="text-[12px] font-bold leading-[27px] ">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div className="mt-7">
            {Questions.map((question, ind) => {
              return <QuestionAnswer key={ind} obj={question} />;
            })}
          </div>
        </div>
        <div className="relative  w-full min-h-[400px] md:min-h-[550px] lg:min-h-[650px] lg:w-[50%] lg:mb-0">
          <div className="absolute top-[18px] left-[70px]  flex gap-[49px] ">
            <p className="question-mark text-[40px] font-medium text-[#A866FD] leading-[28px] ">
              ?
            </p>
            <p className="question-mark translate-y-[-30px] text-[64px] text-[#D434FE] font-medium leading-[28px] ">
              ?
            </p>
            <p className="question-mark text-[40px] font-medium text-[#A866FD] leading-[28px] ">
              ?
            </p>
          </div>
          <img
            src={Image}
            alt="#"
            className="absolute bottom-[0%] left-[50%] translate-x-[-50%]  w-full  z-10 md:w-[80%] lg:w-[100%]"
          />
        </div>
      </article>
      <Line />
    </section>
  );
};

export default FAQ;
