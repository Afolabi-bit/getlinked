import { Line } from "./utils";
import Curve from "../assets/purple_curve.svg";
const Hero = () => {
  return (
    <section className="text-white container">
      <Line />
      <div className="mt-6 md:mt-8">
        <p className="text-base italic font-bold float-right  md:text-[32px] md:pb-1 lg:[36px]">
          Igniting a Revolution in HR Innovation
        </p>
        <img
          className="w-[115px] h-[7px] float-right md:w-[253px] md:h-[12px] "
          src={Curve}
          alt="#"
        />
      </div>
    </section>
  );
};

export default Hero;
