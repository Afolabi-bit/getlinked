import { Line, QuestionAnswer } from "./utils";

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
      <article className="my-[70px] flex flex-col items-center">
        <div className="text-center px-8  md:px-[3rem] lg:w-[50%] lg:text-left">
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
      </article>
      <Line />
    </section>
  );
};

export default FAQ;
