import { IoLogoJavascript } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNightsStay } from "react-icons/md";
import Search from "./Search";

const Nav = () => {
  return (
    <>
      <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 ">
        <h1 className="w-3/12 underline flex">
          <RxHamburgerMenu
            size={25}
            color="black"
            className="ml-[-15px] cursor-pointer"
          />{" "}
          <a href="JsCafe.com" className="flex text-blue-500">
            <IoLogoJavascript size={25} className="ml-3 " />
            <h1 className="text-xl">cafe</h1>
          </a>
        </h1>

        <Search />

        <div className="px-2 w-3/12 flex justify-end cursor-pointer">
          <div className="rounded-full border border-black w-10 h-10">
            <CgProfile size={30} className="m-1 " />
          </div>

          <MdOutlineNightsStay size={35} className="ml-2 mr-[-25px]" />
        </div>
      </div>
    </>
  );
};

export default Nav;
