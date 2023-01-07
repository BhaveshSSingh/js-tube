import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-[60%]">
      <div className=" mx-auto my-2">
        <form>
          <div className="relative">
            <input
              type="search"
              className="block p-4 pl-10 w-full  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 text-gray-900"
              placeholder="Search"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              flex
            >
              <AiOutlineSearch size={20} color="white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
