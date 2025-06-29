import Avatar from '@mui/material/Avatar';
import { Image as ImageIcon, AtSign as MentionIcon } from 'lucide-react';

const MainSearchbar = () => {
  return (
    <div className="bg-[#afc2cf35] bg-opacity-[15%] mx-auto rounded-3xl p-6 w-full flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          sx={{ width: 48, height: 48 }}
        />
        <input
          type="text"
          placeholder="Share something with Rachel..."
          className="flex-1 border border-gray-500 rounded-full px-6 py-2 text-lg bg-transparent outline-none placeholder:text-gray-600 font-normal"
          style={{ borderWidth: 1 }}
        />
      </div>
      <hr className="border-gray-500" />
      <div className="flex items-center gap-8 pl-2 mx-auto">
        <button className="flex items-center gap-2 font-medium text-black text-lg focus:outline-none">
          <ImageIcon className="w-6 h-6 text-gray-500" />
          Photo/video
        </button>
        <span className="text-2xl text-gray-700">|</span>
        <button className="flex items-center gap-2 font-medium text-black text-lg focus:outline-none">
          <MentionIcon className="w-6 h-6 text-gray-500" />
          Mention
        </button>
      </div>
    </div>
  );
};

export default MainSearchbar; 