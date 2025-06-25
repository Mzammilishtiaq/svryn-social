import React from "react";
import { Avatar } from "@mui/material";
import {Ads,Chat,Group,Home,Marketplace,Page,Post,Profile,Setting,Online1,Online2,Online3,Online4,Online5,Online6,Online7} from '../shared/Imageurl'

const topAvatars = [
  { title:"HOME",src: Home, alt: "A" },
  { title:"PAGES",src: Page, alt: "B" },
  { title:"GROUPS",src: Group, alt: "C" },
  { title:"CHAT",src: Chat, alt: "D" },
  { title:"ADS",src: Ads, alt: "E" },
  { title:"POST",src: Post, alt: "F" },
  { title:"MARKETPLACE",src: Marketplace, alt: "G" },
  { title:"PROFILE",src: Profile, alt: "G" },
  { title:"SETTING",src: Setting, alt: "G" },
];

const BottomAvatars = [
  { title:"Faith E",src: Online1, alt: "A" },
  { title:"Nie ki",src: Online2, alt: "B" },
  { title:"D lee ",src: Online3, alt: "C" },
  { title:"Ai Art",src: Online4, alt: "D" },
  { title:"Ai Craft",src: Online5, alt: "E" },
  { title:"Micheal John",src: Online6, alt: "F" },
  { title:"Dee Lee",src: Online7, alt: "G" }
];


function Sidebar() {
  return (
    <div className="min-h-screen w-[20%]">
      <div className="flex justify-center items-center">
        <div className="border-r-2 border-r-[#AFC2CF] h-3 w-2"></div>
      </div>
      <div className="flex flex-col justify-between h-full w-full rounded-2xl  border-2 border-gray-300 ">
      {/* Top Avatars */}
      <div>
        {topAvatars.map((avatar, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-start h-20 px-10 border-b border-gray-300`}
          >
          <div className={`border-2 border-[#AFC2CF] rounded-full p-2 ${
              idx === 2 ? "border-white" : ""
            }`}>  <Avatar
              src={avatar.src}
              alt={avatar.alt}
              className={`border-2 ${
                idx === 2 ? "border-blue-400" : "border-gray-400"
              }`}
              sx={{ width: 48, height: 48 }}
            /></div>
            {/*active {idx === 2 && ( */}
              <span className="ml-2 text-black text-lg font-normal">{avatar.title}</span>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="border-r-2 border-r-[#AFC2CF] h-5 w-2"></div>
      </div>
    <div className="flex flex-col justify-between h-full w-full rounded-2xl  border-2 border-gray-300 gap-y-2 ">
      <h1 className="font-medium text-2xl text-center mt-2">Online Connections</h1>
      {/* Top Avatars */}
      <div className="flex flex-col gap-y-1">
        {BottomAvatars.map((avatar, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-start h-20 px-10 `}
          >
          {/* <div className={`border-2 border-[#AFC2CF] rounded-full p-2 ${
               idx === 2 ? "border-white" : ""
             }`}>  */}
             <Avatar
              src={avatar.src}
              alt={avatar.alt}
              className={``}
              sx={{ width: 48, height: 48 }}
            />
            {/* </div> */}
            {/*active {idx === 2 && ( */}
              <span className="ml-2 text-black text-lg font-normal">{avatar.title}</span>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Sidebar;