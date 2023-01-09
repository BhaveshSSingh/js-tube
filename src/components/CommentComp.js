import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const CommentComp = () => {
  const comments = "lol";
  return (
    <div>
      {" "}
      <div className="flex items-center space-x-1 group ">
        <div className="icon group-hover:bg-orange-500 group-hover:bg-opacity-10 ">
          <AiOutlineComment size={22} className={` hover:text-orange-500`} />
        </div>
        {comments.length > 0 && (
          <span className="group-hover:text-orange-500 text-sm">
            {comments.length}
          </span>
        )}
      </div>
      <div className="flex items-center border-b border-gray-700">
        <div className="icon group">
          <MdClose size={28} />
        </div>
      </div>
      <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
        <div className="w-full">
          <div className="text-[#6e767d] flex gap-x-3 relative">
            <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBCVC-ISKIyOp_8TIJvtrN0EmZEWF5RxHew&usqp=CAU"
              }
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
            <div className="text-[#63767d]">
              <div className="inline-block group">
                <h4
                  className={`font-bold text-[15px] sm:text-base hover:underline inline-block
                        }`}
                >
                  "sssss"
                </h4>
                <span
                  className={`text-sm sm:text-[15px] ml-1.5
                        }`}
                >
                  "Ssssssssssss"
                </span>
              </div>{" "}
              . <span className="hover:underline text-sm sm:text-[15px"></span>
            </div>
          </div>
          <div className="mt-7 flex space-x-3 w-full">
            {/* <ProfilePic /> */}
            <div className="flex-grow mt-2">
              <textarea
                placeholder="Tweet your reply"
                rows="2"
                className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide
                    w-full min-h-[80px]
                    "
              />
              <div className="flex items-center justify-between pt-2.5">
                <div className="icon"></div>
                <button
                  className="text-white 
                        bg-[#7856ff]
                        rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-purple-500 disabled:hover:bg-[#831df0] disabled:opacity-50 disabled:cursor-default"
                  type="submit"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComp;
