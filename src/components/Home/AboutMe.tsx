import Water from "../../assets/Home/about.svg";

const AboutMe = () => {
  return (
    <div className="mx-[21.771vw] h-[43.981vh] mt-[-18vh]">
      <div id="water" className="absolute left-0 right-0  ">
        <img src={Water} alt="water" className="w-full  " />
      </div>
      <p className="absolute w-[15.99vw]  text-[1.296vh] ml-[20.26vw] font-sansation-regular mt-[24.037vh]">
        This Is What My Mentor Says About Me
      </p>
      <p className="absolute text-[4.074vh] w-[37.344vw] ml-[12.188vw] font-glora-bold mt-[27.185vh] ">
        “Natalija Is One Of The Most{" "}
        <span className="text-[#009BCA]">Hardworking</span> Students I've Had.”
      </p>
      <p className="absolute text-[1.481vh] w-[10.26vw] ml-[24.531vw] font-sansation-regular mt-[40.481vh] z-30  ">
        Nikola Tripkovic - Mentor at Nauci Dizajn
      </p>
    </div>
  );
};
 
export default AboutMe;
