import { ABOUT_IMG } from "../utils/constant";

const About = () => {
  return (
    <div className="w-full">
      <h1 className="mt-3 p-2 font-bold text-xl md:text-3xl text-center">
        Welcome to The
        <span className=" ml-1.5 rounded-xl text-white bg-orange-500 p-2">
          Food App
        </span>
      </h1>
      <div className="flex justify-center mt-2"></div>
      <img src={ABOUT_IMG} />
    </div>
  );
};

export default About;
