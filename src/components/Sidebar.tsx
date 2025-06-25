import React from "react";
import { Avatar } from "@mui/material";
// import { Users } from "lucide-react";

const topAvatars = [
  { title:"",src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "A" },
  { title:"",src: "https://randomuser.me/api/portraits/women/2.jpg", alt: "B" },
  { title:"",src: "https://randomuser.me/api/portraits/men/3.jpg", alt: "C" },
  { title:"",src: "https://randomuser.me/api/portraits/men/4.jpg", alt: "D" },
  { title:"",src: "https://randomuser.me/api/portraits/men/5.jpg", alt: "E" },
  { title:"",src: "https://randomuser.me/api/portraits/men/6.jpg", alt: "F" },
  { title:"",src: "https://randomuser.me/api/portraits/men/7.jpg", alt: "G" },
];

// const bottomAvatars = [
//   { src: "https://randomuser.me/api/portraits/women/8.jpg", alt: "H" },
//   { src: "https://randomuser.me/api/portraits/men/9.jpg", alt: "I" },
//   { src: "https://randomuser.me/api/portraits/men/10.jpg", alt: "J" },
//   { src: "https://randomuser.me/api/portraits/men/11.jpg", alt: "K" },
//   { src: "https://randomuser.me/api/portraits/men/12.jpg", alt: "L" },
//   { src: "https://randomuser.me/api/portraits/men/13.jpg", alt: "M" },
// ];

function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full w-[20%] rounded-2xl  border-2 border-gray-300 ">
      {/* Top Avatars */}
      <div>
        {topAvatars.map((avatar, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center h-20 border-b border-gray-300 ${
              idx === 2 ? "bg-blue-200" : ""
            }`}
          >
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              className={`border-2 ${
                idx === 2 ? "border-blue-400" : "border-gray-400"
              }`}
              sx={{ width: 48, height: 48 }}
            />
            {idx === 2 && (
              <span className="ml-2 text-white text-lg font-semibold">GROUPS</span>
            )}
          </div>
        ))}
      </div>
      {/* Bottom Avatars */}
      {/* <div className="flex flex-col items-center gap-4 mb-4">
        {bottomAvatars.map((avatar, idx) => (
          <Avatar
            key={idx}
            src={avatar.src}
            alt={avatar.alt}
            sx={{ width: 48, height: 48 }}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Sidebar;