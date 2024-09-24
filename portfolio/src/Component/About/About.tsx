const About = () => {
  return (
    <div className="w-[95rem] h-[60rem]">
      <div className="bg-[#ececec] w-full h-full flex justify-center items-center">
        <div></div>
        <div className="font-bold">
          <div>who am I?</div>
          <div>방지완</div>
          <div>1996. 05. 04</div>
          <div className="flex flex-col gap-[1rem] text-[1.2rem]">
            <div className="flex justify-start items-center gap-[2.4rem] pb-3 border-b border-3 border-black">
              <div className="font text-[1.8rem]">· Education</div>
              <div>
                <div>2021. 2. 동서울대학교 게임콘텐츠 졸업</div>
                <div>
                  2024. 2 ~ 2024. 9 경일게임IT아카데미 AWS 클라우드 융합 웹
                  프레임워크 개발자 양성과정 수료
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-[2rem] pb-3 border-b border-3 border-black">
              <div className="text-[1.725rem]">· Experience</div>
              <div>2019. 7~8 패스 오브 엑자일 CA</div>
            </div>
            <div className="flex justify-start items-center pb-3 gap-[2.5rem] border-b border-3 border-black">
              <div className="text-[1.7rem] pr-[5rem]">· Skill</div>
              <div>
                <div>2019. 6 ITQ 정보기술자격 한글파워포인트 취득</div>
                <div>2019. 6 ITQ 정보기술자격 한글엑셀 취득</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
