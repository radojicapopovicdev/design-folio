import Logo from "../../assets/Global/logo.svg";

const Header = () => {
  return (
    <div
      id="header-wrapper"
      className="flex justify-between mt-[2vh] mx-[20vw] py-[2vh] items-center bg-[#F0E9D1] rounded-[100px] "
    >
      <img src={Logo} alt="logo" className="ml-10" />
      <p>LOREM</p>
      <p className="ml-[-12vw]">LOREM</p>
      <button className="w-[164px] h-[40px]  rounded-[125px] bg-[#FF9776] text-center text-white mr-10  ">
        Contact
      </button>
    </div>
  );
};

export default Header;
