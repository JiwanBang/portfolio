const About = () => {
  return (
    <div className="w-[95rem] h-[60rem]">
      <div className="bg-[#ececec] w-full h-full flex justify-center items-center">
        <div></div>
        <div className="font-bold w-[45rem]">
          <div className="relative">
            <div className="text-[3rem]">who am I?</div>
            <div className="w-full h-[1rem] bg-[yellow] relative"></div>

            <div>방지완</div>
            <div>1996. 05. 04</div>
          </div>
          <div className="flex flex-col gap-[1rem] text-[1.2rem]">
            <div className="flex justify-start items-center gap-[2.4rem] pb-3 border-b border-3 border-black">
              <div className="font text-[1.8rem]">· Education</div>
              <div className="flex items-start justify-center text-[1rem] gap-[2rem]">
                <div className="h-full flex flex-col gap-[0.9rem]">
                  <div>2021. 2.</div>
                  <div>2024. 2 ~ 2024. 9</div>
                </div>
                <div className="flex flex-col gap-[0.8rem]">
                  <div>동서울대학교 게임콘텐츠 졸업</div>
                  <div>
                    경일게임IT아카데미 AWS 클라우드
                    <br /> 융합 웹 프레임워크 개발자 양성과정 수료
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-[2rem] pb-3 border-b border-3 border-black">
              <div className="text-[1.725rem]">· Experience</div>
              <div className="text-[1rem] flex gap-[5rem]">
                <span className="">2019. 7 ~ 8</span>
                <span>패스 오브 엑자일 CA</span>
              </div>
            </div>
            <div className="flex justify-start items-center pb-3 gap-[7.5rem] border-b border-3 border-black">
              <div className="text-[1.7rem]">· Skill</div>
              <div className="text-[1rem] flex gap-[7rem]">
                <div className="flex flex-col gap-[0.5rem]">
                  <div>2019. 6</div>
                  <div>2019. 6</div>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <span>ITQ 정보기술자격 한글파워포인트 취득</span>
                  <span>ITQ 정보기술자격 한글엑셀 취득</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
