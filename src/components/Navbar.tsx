import React from "react";
import { Avatar, Badge } from "@mui/material";
import { Star, Bell, MessageCircle, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#A9B6BC] flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="text-[56px] font-serif tracking-widest text-[#E6E4DA] select-none" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
        SVRYN
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-[#E6E4DA] rounded-lg w-[500px] h-14 px-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none text-xl text-[#A9B6BC] placeholder-[#A9B6BC]"
          />
          <Search className="text-[#A9B6BC] w-7 h-7" />
        </div>
      </div>

      {/* Icons and Avatar */}
      <div className="flex items-center gap-6 ml-8">
        <Badge badgeContent={5} color="default" sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#E6E4DA",
            color: "#A9B6BC",
            fontWeight: "bold",
            fontSize: "0.9rem",
            top: 6,
            right: 6,
          }
        }}>
          <Star className="w-8 h-8 text-[#E6E4DA]" />
        </Badge>
        <Badge badgeContent={2} color="default" sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#E6E4DA",
            color: "#A9B6BC",
            fontWeight: "bold",
            fontSize: "0.9rem",
            top: 6,
            right: 6,
          }
        }}>
          <Bell className="w-8 h-8 text-[#E6E4DA]" />
        </Badge>
        <Badge badgeContent={7} color="default" sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#E6E4DA",
            color: "#A9B6BC",
            fontWeight: "bold",
            fontSize: "0.9rem",
            top: 6,
            right: 6,
          }
        }}>
          <MessageCircle className="w-8 h-8 text-[#E6E4DA]" />
        </Badge>
        <Avatar
          alt="Profile"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          sx={{ width: 60, height: 60, marginLeft: 2 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
