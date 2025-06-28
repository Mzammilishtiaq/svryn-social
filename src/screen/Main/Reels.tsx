import React from "react";
import Avatar from "@mui/material/Avatar";
import { Heart, MessageCircle, Send, PlusCircle } from "lucide-react";

const storyAvatars = [
  // Replace with your avatar image URLs
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
];

const Reels: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      {/* Story Avatars */}
      <div className="flex space-x-4 mt-6 mb-6">
        {storyAvatars.map((src, idx) => (
          <Avatar
            key={idx}
            src={src}
            className="border-4 border-blue-300"
            sx={{ width: 64, height: 64 }}
          />
        ))}
        {/* Next arrow */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-blue-300">
          <span className="text-3xl text-white">{'>'}</span>
        </div>
      </div>

      {/* Reel Content */}
      <div className="relative flex">
        {/* Main Reel Image */}
        <div className="rounded-3xl border-4 border-blue-200 shadow-2xl overflow-hidden w-[400px] h-[600px] flex items-center justify-center bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Reel"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Action Bar */}
        <div className="absolute right-[-80px] top-1/4 flex flex-col items-center space-y-6">
          {/* Profile + Add */}
          <div className="relative">
            <Avatar
              src="https://randomuser.me/api/portraits/men/8.jpg"
              sx={{ width: 48, height: 48 }}
            />
            <PlusCircle className="absolute -bottom-2 -right-2 text-purple-400 bg-white rounded-full" size={24} />
          </div>
          {/* Like */}
          <button className="bg-white rounded-full p-3 shadow-lg">
            <Heart className="text-2xl text-gray-700" size={24} />
          </button>
          {/* Comment */}
          <button className="bg-white rounded-full p-3 shadow-lg">
            <MessageCircle className="text-2xl text-gray-700" size={24} />
          </button>
          {/* Share */}
          <button className="bg-white rounded-full p-3 shadow-lg">
            <Send className="text-2xl text-gray-700" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reels;
