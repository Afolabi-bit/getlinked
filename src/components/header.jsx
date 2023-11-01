import Menu from "../assets/menu-btn.svg";
import Close from "../assets/close_btn.svg";
import { Line, RegisterBtn } from "./utils";
import { useRef } from "react";

const Header = () => {
  const navBarRef = useRef(null);

  const toggleNavBar = (action) => {
    const navBar = navBarRef.current;
    console.log(navBar);

    action === "close"
      ? navBar.classList.remove("show")
      : navBar.classList.add("show");
  };
  return (
    <header className="px-[2rem] flex items-center justify-between pt-8 pb-4 md:px-[3rem] lg:px-[4.5rem]">
      <h1 className="text-white text-[22px] font-semibold md:font-bold">
        get<span className="text-[#D434FE] ">linked</span>
      </h1>
      <button className="md:hidden" onClick={() => toggleNavBar("open")}>
        <img src={Menu} alt="Menu Icon" />
      </button>
      <nav className="hidden md:flex w-[70%] mr-2 justify-between items-center">
        <ul className="flex justify-between w-2/3">
          <li>
            <a href="#" className="text-white">
              Timeline
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
        <RegisterBtn />
      </nav>
      <nav
        ref={navBarRef}
        id="navbar"
        className="flex justify-center z-[10000] flex-col md:hidden bg-[#150E28] w-full absolute top-[-105%] right-[0] p-12 rounded-[5px]"
      >
        <button
          className="close-btn flex justify-center items-center rounded-[50%] w-[32px] h-[32px] z-50  absolute top-[30px] right-[30px]"
          onClick={() => toggleNavBar("close")}
        >
          <span className="bg-[#150E28] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
            <img className="scale-150" src={Close} alt="close icon" />
          </span>
        </button>
        <ul className="flex flex-col mt-16 w-full justify-between ">
          <li className="mb-4">
            <a href="#" className="text-white">
              Timeline
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white">
              Overview
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white">
              FAQs
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
        <RegisterBtn />
      </nav>
    </header>
  );
};

export default Header;
