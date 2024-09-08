// import BottomWater from "../../assets/Home/bot-wate.svg";
import Duck from "../../assets/Home/peeking-duck.svg";

const MyWork = () => {
  return (
    <div id="work-section" className="mx-[21.771vw] z-60 mt-[-4vh]">
      <div className="absolute left-0 right-0 "></div>
      <img
        src={Duck}
        alt="peeking-duck"
        className="absolute mt-[31vh] ml-[9.583vw]"
      />
      <div id="case-studies" className=" absolute pt-[50.185vh]">
        {" "}
        <div className="w-[46.875vw] h-[51.944vh] ml-[4.792vw] flex items-baseline  ">
          <p className="text-[2.593vh] font-sansation-regular">01</p>
          <p className="font-sansation-regular ml-[1vw]">Case Study</p>
        </div>
        <div className="w-[46.875vw] h-[51.944vh] ml-[4.792vw] flex items-baseline  ">
          <p className="text-[2.593vh] font-sansation-regular">02</p>
          <p className="font-sansation-regular ml-[1vw]">UI Design</p>
        </div>
        <div className="w-[46.875vw] h-[51.944vh] ml-[4.792vw] flex items-baseline  ">
          <p className="text-[2.593vh] font-sansation-regular">03</p>
          <p className="font-sansation-regular ml-[1vw]">
            Redesign - For Client
          </p>
        </div>
        <div className="w-[46.875vw] h-[51.944vh] ml-[4.792vw] flex items-baseline  ">
          <p className="text-[2.593vh] font-sansation-regular">04</p>
          <p className="font-sansation-regular ml-[1vw]">Case Study</p>
        </div>
        <div className="w-[46.875vw] h-[51.944vh] ml-[4.792vw] flex items-baseline  ">
          <p className="text-[2.593vh] font-sansation-regular">05</p>
          <p className="font-sansation-regular ml-[1vw]">Case Study</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
