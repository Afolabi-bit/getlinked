import StarD from "../assets/star-dim.svg";
import StarW from "../assets/star-white.svg";
import StarP from "../assets/star-purple.svg";
import Shield from "../assets/shield_lock.svg";
import Lock from "../assets/lock.png";

const PrivacyPolicy = () => {
  return (
    <section className="py-[70px] px-[2rem]">
      <article className="lg:flex lg:px-[5rem] lg:gap-[50px]">
        {/* TEXT */}
        <div className="relative md:w-[60%] md:mx-auto lg:w-[40%]">
          <img
            src={StarD}
            alt="#"
            className="absolute right-[25%] top-[-20px] twinkle-2"
          />
          <img
            src={StarP}
            alt="#"
            className="absolute right-[16%] top-[18%] twinkle-fast"
          />
          <div className="text-center md:text-left">
            <h2 className="text-[20px] font-bold  ">
              <span>Privacy Policy and</span>
              <br />
              <span className="text-[#d434fe]">Terms</span>
            </h2>
            <p className="text-[#ffffffbf] text-[12px] leading-[28px] mb-[15px]">
              Last updated on September 12, 2023
            </p>
          </div>
          <p className="text-[12px] leading-[23px] mx-[1rem] text-center md:text-left md:mx-0 ">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          {/* bordered box */}
          <div className="py-[50px] flex flex-col items-center  px-[20px] border border-[#d434fe]  rounded-[5px] mt-[30px] md:px-[50px] lg:w-full">
            <p className="text-[12px]  text-center font-normal leading-[26px] mb-[30px] md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="relative">
              <img
                src={StarP}
                alt="#"
                className="absolute twinkle-2 left-[-40px] top-[120px]"
              />
              <h3 className="text-[#d434fe] text-[13px] font-bold leading-[28px]">
                Licensing Policy
              </h3>
              <p className="text-[12px] font-bold leading-[26px]">
                Here are terms of our Standard License:
              </p>
              <div className="flex mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="w-[27px] h-[27px]"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p className="text-[12px] ml-[10px] font-normal leading-[21px]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="w-[27px] h-[27px]"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p className="text-[12px] ml-[10px] font-normal leading-[21px]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>

            <button className="btn mt-[40px] mx-auto  px-[25px]">
              Read More
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative mt-[70px] w-[400px] mx-auto h-[450px] md:h-[869.5px]">
          <img
            src={StarP}
            alt="#"
            className="absolute top-[20%] left-0 twinkle-2"
          />
          <img
            src={StarW}
            alt="#"
            className="absolute top-[23%] right-[25%] twinkle-2"
          />
          <img
            src={StarW}
            alt="#"
            className="absolute bottom-[15%] left-[25%] twinkle-fast"
          />
          <img
            src={StarD}
            alt="#"
            className="absolute bottom-[12%] right-[5%] twinkle-2"
          />
          <img
            src={Shield}
            alt="#"
            className="absolute top-0 left-[50%] translate-x-[-50%] w-[390px] h-[311px] md:w-[500px] md:h-[600px] "
          />
          <img
            src={Lock}
            alt="#"
            className="absolute bottom-0 object-contain left-[10%] w-[262px] h-[351px] md:h-[640px] md:w-[520px] md:bottom-[80px] md:left-[-4%]"
          />
        </div>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
