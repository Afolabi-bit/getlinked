import BigIdea from "../assets/big.png";

const Intro = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col items-center">
      <div className="big-idea w-full flex justify-center items-center relative">
        <p className="z-10 absolute w-full top-[50%] left-[50%] translate-x-[-50%]">
          The Big Ideal
        </p>
        <img
          src={BigIdea}
          alt="#"
          className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </section>
  );
};

export default Intro;
