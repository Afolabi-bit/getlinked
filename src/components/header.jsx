import Menu from "../assets/menu-btn.svg";

const Header = () => {
  return (
    <header className="container flex justify-between py-4 ">
      <h1 className="text-white text-[22px] font-semibold md:font-bold">
        get<span className="text-[#D434FE] ">linked</span>
      </h1>
      <button className="md:hidden">
        <img src={Menu} alt="Menu Icon" />
      </button>
    </header>
  );
};

export default Header;
