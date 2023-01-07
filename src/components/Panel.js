import { useState } from "react";
import {
  AiOutlineFire,
  AiOutlineLike,
  AiOutlineVideoCamera,
  AiOutlineCloudUpload,
} from "react-icons/ai";

const Panel = () => {
  const [hidePanel, setHidePanel] = useState(null);

  return (
    <div className="z-30 bg-white h-[89vh] max-w-min-1/3 border border-b-0   shadow-lg">
      <ul className="pt-3 m-2">
        <li className="px-4 flex justify-evenly items-center py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded-xl">
          <AiOutlineFire color="red" className="flex justify-start" />
          Trending
        </li>
        <li className="px-4 flex  justify-around items-center py-2 hover:bg-blue-600 hover:text-white cursor-pointer                   rounded-xl">
          <AiOutlineLike color="orange" className="left-0" />
          Liked
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded-xl justify-evenly">
          <AiOutlineVideoCamera color="purple" />
          Saved
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded-xl justify-evenly">
          <AiOutlineCloudUpload color="green" />
          Upload
        </li>
      </ul>
    </div>
  );
};

export default Panel;
