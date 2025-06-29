import { Avatar, TextField, IconButton } from "@mui/material";
import { CheckCircle2, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const comments = [
  {
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Rachel Stinson",
    comment: "LOL",
    time: "3m",
    likes: 5,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Blessing",
    comment: "High quality",
    time: "2h",
    likes: 0,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Daniel Mike",
    comment: "That's cool",
    time: "7h",
    likes: 10,
  },
];

export default function Postview() {
  return (
    <div className="flex w-full h-screen bg-black rounded-[32px] overflow-hidden">
      {/* Left: Video/Image */}
      <div className="flex-1 bg-blue-900 flex items-center justify-center relative">
        {/* Replace with your video/image */}
        <img
          src="/src/assets/vid.png"
          alt="background"
          className="object-cover w-full h-full"
        />
        {/* Overlay for effect */}
        <div className="absolute inset-0 bg-blue-900 opacity-60" />
      </div>

      {/* Right: Comments & Actions */}
      <div className="w-[500px] bg-white flex flex-col justify-between">
        {/* Top: User Info & Comments */}
        <div>
          {/* User Info */}
          <div className="flex items-center gap-3 p-4 border-b">
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">lee chou</span>
                <CheckCircle2 className="text-blue-500 w-4 h-4" />
              </div>
              <span className="text-xs text-gray-500">Original audio</span>
            </div>
          </div>

          {/* Comments */}
          <div className="p-4 space-y-6">
            {comments.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <Avatar src={c.avatar} />
                <div className="flex-1">
                  <span className="font-semibold">{c.name}</span>
                  <div className="text-sm">{c.comment}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span>{c.time}</span>
                    {c.likes > 0 && <span>{c.likes} Like</span>}
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Actions, Likes, Add Comment */}
        <div className="p-4 border-t">
          {/* Actions */}
          <div className="flex items-center gap-4 mb-2">
            <IconButton><Heart /></IconButton>
            <IconButton><MessageCircle /></IconButton>
            <IconButton><Send /></IconButton>
            <div className="flex-1" />
            <IconButton><Bookmark /></IconButton>
          </div>
          {/* Likes and emojis */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold">15,388 likes</span>
            <span className="text-xl">😲😍</span>
          </div>
          {/* Add Comment */}
          <TextField
            variant="outlined"
            placeholder="Add Comment..."
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <>
                  <span className="mr-2">@</span>
                  <span>😊</span>
                </>
              ),
              style: { borderRadius: 24, background: '#f5f5f5' },
            }}
          />
        </div>
      </div>
    </div>
  );
}
