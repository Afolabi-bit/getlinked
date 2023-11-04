import { Line, Shadow } from "./utils";
import Image from "../assets/8046554.png";
import Ellipse from "../assets/Ellipse.svg";
import StarW from "../assets/star-white.svg";
import StarD from "../assets/star-dim.svg";
import StarP from "../assets/star-purple.svg";

const Criteria = () => {
  return (
    <section className="relative">
      <img
        src={StarP}
        alt="#"
        className="absolute left-[45%] top-[-35px] twinkle-2 md:left-[50%] md:top-[-15px] lg:left-[14%] lg:top-[0] "
      />
      <img
        src={StarD}
        alt="#"
        className="absolute top-[190px] left-[60%] twinkle-2 md:left-[60%] md:top-[290px] lg:left-[31%] lg:top-[310px] "
      />
      <img
        src={StarW}
        alt="#"
        className="absolute bottom-[100px] right-[18%] twinkle-fast md:right-[27%] lg:right-[55%] lg:bottom-[120px] "
      />
      <Shadow dist={"criteria-shadow-top"} />
      <Shadow dist={"criteria-shadow-bottom"} />

      <article className="my-[70px] w-full flex flex-col items-center lg:flex-row lg:justify-between lg:gap-[20px] lg:px-[5rem] ">
        <div className="relative w-full min-h-[320px] md:min-h-[550px] lg:min-h-[650px] lg:w-[50%] lg:mb-0">
          <img
            src={Image}
            alt="#"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full  z-10 md:w-[80%] lg:w-[100%]"
          />
          <img
            src={Ellipse}
            alt="#"
            className="absolute hidden w-[134px] h-[134px] lg:block lg:top-[43px] lg:left-[45px]"
          />
        </div>
        <div className="text-center px-8 relative  md:px-[3rem] lg:w-[50%] lg:text-left">
          <h2 className="mb-3 ">
            <span className="text-white text-[20px] font-bold leading-[133%] md:text-[32px]">
              Judging Criteria
            </span>{" "}
            <br />
            <span className="text-[#d434fe] text-[20px] font-bold leading-[133%] md:text-[32px]">
              Key attributes
            </span>
          </h2>
          <div className="text-center flex flex-col items-center lg:items-start lg:text-left">
            <p className="mb-[10px] md:w-[70%] md:mb-[20px] lg:w-[100%] lg:mb-[10px]">
              <span className="text-[#FF26B9] text-[13px] font-bold leading-[173.5%]">
                Innovation and Creativity:
              </span>
              <span className="text-[12px] font-normal leading-[173.5%]">
                {" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>{" "}
            <p className="mb-[10px] md:w-[70%] md:mb-[20px] lg:w-[100%] lg:mb-[10px]">
              <span className="text-[#FF26B9] text-[13px] font-bold leading-[173.5%]">
                Functionality:
              </span>
              <span className="text-[12px] font-normal leading-[173.5%]">
                {" "}
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>{" "}
            <p className="mb-[10px] md:w-[70%] md:mb-[20px] lg:w-[100%] lg:mb-[10px]">
              <span className="text-[#FF26B9] text-[13px] font-bold leading-[173.5%]">
                Impact and Relevance:
              </span>
              <span className="text-[12px] font-normal leading-[173.5%]">
                {" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>{" "}
            <p className="mb-[10px] md:w-[70%] md:mb-[20px] lg:w-[100%] lg:mb-[10px]">
              <span className="text-[#FF26B9] text-[13px] font-bold leading-[173.5%]">
                Technical Complexity:
              </span>
              <span className="text-[12px] font-normal leading-[173.5%]">
                {" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>{" "}
            <p className="mb-[10px] md:w-[70%] md:mb-[20px] lg:w-[100%] lg:mb-[10px]">
              <span className="text-[#FF26B9] text-[13px] font-bold leading-[173.5%]">
                Adherence to Hackathon Rules:
              </span>
              <span className="text-[12px] font-normal leading-[173.5%]">
                {" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>
          </div>
          <button className="btn mt-2" style={{ padding: "0 30px" }}>
            Read More
          </button>
        </div>
      </article>
      <Line />
    </section>
  );
};

export default Criteria;
