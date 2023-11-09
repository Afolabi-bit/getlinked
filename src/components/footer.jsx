const Footer = () => {
  return (
    <footer className="flex flex-col px-[3rem] py-[70px] bg-[#100B20]">
      <div className="text-left mb-[35px]">
        <h3 className="text-[20px] font-bold mb-[10px]">
          <span>get</span>
          <span className="text-[#d434fe]">linked</span>
        </h3>
        <p className="text-[12px] font-normal leading-[20px]">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
        <p className="text-[12px] font-normal leading-[20px] mt-[35px]">
          Terms of Use{" "}
          <span className=" h-[20px] translate-y-[5px] inline-block w-[2px] bg-[#d434fe] mx-[8px]"></span>{" "}
          Privacy Policy
        </p>
      </div>

      <div>
        <h3 className="text-[#d434fe] text-[14px] font-semibold leading-[24px] mb-[7px]">
          Useful Links
        </h3>
        <ul className="mb-[5px]">
          <li>
            <a
              href="#"
              className="text-[12px] font-normal leading-[21px] bg-gra"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[12px] font-normal leading-[21px] bg-gra"
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[12px] font-normal leading-[21px] bg-gra"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[12px] font-normal leading-[21px] bg-gra"
            >
              Register
            </a>
          </li>
        </ul>
        <div className="flex">
          <span className="text-[#d434fe]">Follow us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
