const PrivacyPolicy = () => {
  return (
    <section className="py-[70px] px-[2rem]">
      <article>
        <div>
          <div className="text-center">
            <h2 className="text-[20px] font-bold  ">
              <span>Privacy Policy and</span>
              <br />
              <span className="text-[#d434fe]">Terms</span>
            </h2>
            <p className="text-[#ffffffbf] text-[12px] leading-[28px] mb-[15px]">
              Last updated on September 12, 2023
            </p>
          </div>
          <p className="text-[12px] leading-[23px] mx-[1rem] text-center">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          {/* bordered box */}
          <div className="py-[50px] flex flex-col items-center  px-[20px] border border-[#d434fe]  rounded-[5px] mt-[30px]">
            <p className="text-[12px]  text-center font-normal leading-[26px] mb-[30px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div>
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
      </article>
    </section>
  );
};

export default PrivacyPolicy;
