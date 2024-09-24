import bgimg from "../img/5ef26b5363fff815b5dad77752e3980f99d0a908-2000x3000.webp";

const Bg = () => {
  return (
    <div className="z-[-1]">
      <img className="z-[-1] w-full h-full fixed" src={bgimg} />
    </div>
  );
};

export default Bg;
