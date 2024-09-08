import Photo from "../../assets/Home/photo.png";

import Cloud1 from "../../assets/Home/could1.svg";
import Cloud2 from "../../assets/Home/cloud2.svg";
import Cloud3 from "../../assets/Home/cloud3.svg";

import Pond from "../../assets/Home/pond.svg"
const Hero = () => {
  return (
    <div id="hero-wrapper" className="mx-[21.771vw] h-screen">
      <p className="text-[#454545] text-[5.417vw] absolute ml-[9.583vw] mt-[8.611vh] font-glora-bold ">
        Making
      </p>
      <p className="text-[#FF9776] text-[5.417vw] absolute ml-[] mt-[19.074vh] font-glora-bold">
        Web/UX/UI
      </p>
      <img
        src={Photo}
        alt="photo"
        className="min-w-[8.542vw] h-[10.463vh] absolute mt-[32vh] "
      />
      <p className="text-[#454545] text-[5.417vw] absolute ml-[9.583vw] mt-[29.537vh] font-glora-bold">
        Magic
      </p>
      <p className="text-[#454545]/80 w-[22.917vw] absolute ml-[33.542vw] mt-[28vh] font-sansation-regular text-[1.481vh]  ">
        I'm Natalija, designer based in Serbia. I bring over 2 years of
        experience, backed by 10 months of UX/UI Design education and 6 months
        of Web Design education under individual mentorship.
      </p>
      <button className="bg-[#FF9776] absolute w-[255px] h-[44px] text-center text-white rounded-[125px] ml-[33.542vw] mt-[39vh] font-sansation-regular">
        Let’s work together
      </button>
      {/* CLOUDS */}
      <div id="clouds">
        <img src={Cloud1} alt="cloud1" className="absolute ml-[-10vw] mt-[8vh] w-[4.238vw] h-[4.245vh] " />
        <img src={Cloud2} alt="could2" className="absolute ml-[8vw] mt-[3vh] w-[3.794vw] h-[4.554vh] " />
        <img src={Cloud3} alt="cloud3" className="absolute ml-[40.885vw] mt-[3vh] w-[3.808vw] h-[4.921vh] " />
      </div>
      <div id="pond" className="absolute left-0 right-0 bottom-0 z-3 h-[302px]">
        {" "}
        <img src={Pond} alt={"pond"} className="w-full"/>
      </div>
    </div>
  );
};

export default Hero;
