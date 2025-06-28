import React from "react";
import { Avatar } from "@mui/material";
import { Check } from "lucide-react";
import {
  ShareIcon,
  CommentIcon,
  FaverateIcon,
  HeartIcon,
  VerifyIcon,
  ThreeDots,Post1,Post2
} from "../../shared/Imageurl";

const MainPost = () => {
  return (
    <div className=" grid grid0cols-1 space-y-5">
      <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg border border-[#AFC2CF]">
        {/* Header */}
        <div className="flex gap-x-4 items-center px-4 py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
              <div className="rounded-full border-2 border-p-2 border-[#4EAAE9] p-1 ">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                sx={{ width: 40, height: 40 }}
                  className=""
              />
              </div>
              <div className="flex items-start flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="text-black font-semibold">Username</span>
                  <div className="flex items-center gap-x-2">
                    <img src={VerifyIcon} alt="verify" className="w-5 h-5" />
                    <span className="text-gray-400 text-sm ">• 2h</span>
                  </div>
                </div>
                <span className="text-[#000000] opacity-[70%] font-semibold">
                  Original audio
                </span>
              </div>
            </div>
            <img src={ThreeDots} alt="" className="w-7 h-7" />
          </div>
        </div>
        {/* Main Image */}
        <div className="w-full flex flex-col items-center justify-center text-center px-32 h-[500px] bg-[#8037C0] text-white gap-y-10">
          <h1 className="text-4xl font-semibold">Congratulations to Hamoye Data Science
          Ingernship Stage C Winners!</h1>
          <p className="text-sm">The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases.</p>
        </div>
        {/* Footer */}
        <div className="flex flex-col items-start gap-y-1 px-4 py-3 bg-white">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-5">
              <img className="w-4 h-4" src={HeartIcon} alt="" />
              <img className="w-4 h-4" src={CommentIcon} alt="" />
              <img className="w-4 h-4" src={ShareIcon} alt="" />
            </div>
            <div>
              <img className="w-4 h-4" src={FaverateIcon} alt="" />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <button className="text-gray-400 hover:text-green-500 focus:outline-none">
              <Check className="w-5 h-5" />
            </button>
            <span className="ml-2 text-gray-400 text-sm">388 likes</span>
          </div>
          <span className="text-[#000] opacity-[50%]">
          We’ve spent the past week exploring the oil growing & producing regions of China
          </span>
          <div className="flex items-center space-x-2 text-2xl">
            <span role="img" aria-label="surprised" className="text-lg">
              😯
            </span>
            <span role="img" aria-label="love" className="text-lg">
              😍
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-[#AFC2CF]">
        {/* Header */}
        <div className="flex gap-x-4 items-center px-4 py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
              <div className="rounded-full border-2 border-p-2 border-[#4EAAE9] p-1">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                sx={{ width: 40, height: 40 }}
              />
              </div>
              <div className="flex items-start flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="text-black font-semibold">Username</span>
                  <div className="flex items-center gap-x-2">
                    <img src={VerifyIcon} alt="verify" className="w-5 h-5" />
                    <span className="text-gray-400 text-sm ">• 2h</span>
                  </div>
                </div>
                <span className="text-[#000000] opacity-[70%] font-semibold">
                  Original audio
                </span>
              </div>
            </div>
            <img src={ThreeDots} alt="" className="w-7 h-7" />
          </div>
        </div>
        {/* Main Image */}
        <div className="w-full bg-gray-900">
          <img src={Post1}
            alt="Workspace Setup"
            className="w-full h-[500px]"
          />
        </div>
        {/* Footer */}
        <div className="flex flex-col items-start gap-y-1 px-4 py-3 bg-white">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-5">
              <img className="w-4 h-4" src={HeartIcon} alt="" />
              <img className="w-4 h-4" src={CommentIcon} alt="" />
              <img className="w-4 h-4" src={ShareIcon} alt="" />
            </div>
            <div>
              <img className="w-4 h-4" src={FaverateIcon} alt="" />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <button className="text-gray-400 hover:text-green-500 focus:outline-none">
              <Check className="w-5 h-5" />
            </button>
            <span className="ml-2 text-gray-400 text-sm">388 likes</span>
          </div>
          <span className="text-[#000] opacity-[50%]">
            ✔ My workspace is a soft place for hard work.
          </span>
          <div className="flex items-center space-x-2 text-2xl">
            <span role="img" aria-label="surprised" className="text-lg">
              😯
            </span>
            <span role="img" aria-label="love" className="text-lg">
              😍
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-[#AFC2CF]">
        {/* Header */}
        <div className="flex gap-x-4 items-center px-4 py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
              <div className="rounded-full border-2 border-p-2 border-[#4EAAE9] p-1">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                sx={{ width: 40, height: 40 }}
              />
              </div>
              <div className="flex items-start flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="text-black font-semibold">Username</span>
                  <div className="flex items-center gap-x-2">
                    <img src={VerifyIcon} alt="verify" className="w-5 h-5" />
                    <span className="text-gray-400 text-sm ">• 2h</span>
                  </div>
                </div>
                <span className="text-[#000000] opacity-[70%] font-semibold">
                  Original audio
                </span>
              </div>
            </div>
            <img src={ThreeDots} alt="" className="w-7 h-7" />
          </div>
        </div>
        {/* Main Image */}
        <div className="w-full bg-gray-900">
          <img
            src={Post2}
            alt="Workspace Setup"
            className="w-full h-[500px]"
          />
        </div>
        {/* Footer */}
        <div className="flex flex-col items-start gap-y-1 px-4 py-3 bg-white">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-5">
              <img className="w-4 h-4" src={HeartIcon} alt="" />
              <img className="w-4 h-4" src={CommentIcon} alt="" />
              <img className="w-4 h-4" src={ShareIcon} alt="" />
            </div>
            <div>
              <img className="w-4 h-4" src={FaverateIcon} alt="" />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <button className="text-gray-400 hover:text-green-500 focus:outline-none">
              <Check className="w-5 h-5" />
            </button>
            <span className="ml-2 text-gray-400 text-sm">388 likes</span>
          </div>
          <span className="text-[#000] opacity-[50%]">
            ✔ My workspace is a soft place for hard work.
          </span>
          <div className="flex items-center space-x-2 text-2xl">
            <span role="img" aria-label="surprised" className="text-lg">
              😯
            </span>
            <span role="img" aria-label="love" className="text-lg">
              😍
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
