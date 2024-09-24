import mypic from "../../img/KakaoTalk_20240924_094120753.jpg";

const Main = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[60rem] w-[25rem] bg-black p-[2rem]">
        <div className="flex items-center justify-center flex-col">
          <span className="text-[2rem] font-bold text-white">PORTFOLIO.</span>
          <div></div>
        </div>
      </div>
      <div className="w-[70rem] h-[60rem] overflow-hidden">
        <div className="menubar p-[2rem] flex items-center justify-center bg-[#5d5d5d]">
          <ul className="flex items-between justify-between w-[70%] font-bold text-white text-[1.2rem]">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORKS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="bg-white overflow-hidden">
          <img src={mypic} className="w-[1900px] h-[900px]" />
        </div>
      </div>
      <div className="absolute bottom-[15%] left-[20%] flex  justify-center flex-col">
        <span className="text-[2.2rem] h-[2.2rem] font-bold text-white">
          한 발짝 더 나아가는 개발자
        </span>
        <span className="text-[3.5rem] font-bold text-white">
          방지완 입니다
        </span>
        <div className="bg-[#fef200] h-[4rem] mt-3 text-[2rem] font-bold text-center p-[0.5rem]">
          BACKEND DEVELOPER
        </div>
      </div>
    </div>
  );
};

export default Main;
