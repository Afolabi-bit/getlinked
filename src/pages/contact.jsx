import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-[2rem] px-[2rem]">
      <Link
        to={"/"}
        className="w-[30px] h-[30px] rounded-[100%] flex justify-center items-center back-btn"
      >
        <span className="bg-[#150E28] w-[26px] h-[26px] rounded-[100%] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            className="scale-[1.5]"
          >
            <path
              d="M4.26662 1.20001L1.19995 4.26668L4.26662 6.56668"
              stroke="white"
            />
          </svg>
        </span>
      </Link>
    </section>
  );
};

export default Contact;
