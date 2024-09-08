import Logo from "../../assets/Global/logo.svg";

const Header = () => {
  return (
    <div
      id="header-wrapper"
      className="flex justify-between mt-[2vh] mx-[21.771vw] py-[2vh] items-center bg-[#F0E9D1] rounded-[100px] "
    >
      <img src={Logo} alt="logo" className="ml-10" />
      <p className=" font-sansation-regular">LOREM</p>
      <p className="ml-[-12vw] font-sansation-regular">LOREM</p>
      <button className="w-[164px] h-[40px]  rounded-[125px] bg-[#FF9776] text-center text-white mr-10 font-sansation-regular  ">
        Contact
      </button>
    </div>
  );
};

export default Header;
