import { IoLogoJavascript } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdOutlineDarkMode,
  MdLightMode,
  MdPersonOutline,
} from "react-icons/md";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../app/appSlice";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();

  const toggleMenuFn = () => {
    dispatch(toggleMenu());
    console.log("clicked hamburger");
  };

  const { handleThemeSwitch, theme } = useTheme();
  return (
    <>
      <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 dark:bg-gray-800 dark:text-white">
        <h1 className="w-3/12 underline flex ">
          <RxHamburgerMenu
            size={25}
            className="ml-[-15px] cursor-pointer dark:text-white"
            onClick={toggleMenuFn}
          />{" "}
          <Link to="/home" className="flex text-blue-500">
            <IoLogoJavascript size={25} className="ml-3 " />
            <h1 className="text-xl">cafe</h1>
          </Link>
        </h1>

        <Search />

        <div className="px-2 w-3/12 flex justify-end cursor-pointer">
          <div className="rounded-full border border-black w-10 h-10 dark:border-white">
            <Link to="/profile">
              <MdPersonOutline size={30} className="m-1 " />
            </Link>
          </div>
          {theme === "light" ? (
            <MdOutlineDarkMode
              size={35}
              className="ml-2 mr-[-25px] text-black shadow-sm shadow-black rounded-full none"
              onClick={handleThemeSwitch}
            />
          ) : (
            <MdLightMode
              size={35}
              className="ml-2 mr-[-25px] text-orange-400 shadow-sm shadow-orange-400 rounded-full"
              onClick={handleThemeSwitch}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
