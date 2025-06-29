import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Avatar, Box } from "@mui/material";
import { Plus } from "lucide-react";
import { Navigation } from "swiper/modules";

const stories = [
  {
    type: "create",
    label: "Create story",
    bg: "bg-orange-100",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Good Vibes",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Good Vibes",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Happy Times",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Adventure Awaits",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Nature's Beauty",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "City Life",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=facearea&w=400&q=80",
  },
  {
    label: "Travel Dreams",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=facearea&w=400&q=80",
  },
  // {
  //   label: "Food Adventures",
  //   avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  //   img: "https://images.unsplash.com/photo-1504674900240-9c9c0b1b0b1b?auto=format&fit=facearea&w=400&q=80",
  // },
  // {
  //   label: "Art & Culture",
  //   avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  //   img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=facearea&w=400&q=80",
  // },
  // {
  //   label: "Fitness Goals",
  //   avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  //   img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=facearea&w=400&q=80",
  // },
  // {
  //   label: "Tech World",
  //   avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  //   img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=facearea&w=400&q=80",
  // },
];

const MainStory = () => (
  <Box className="w-full py-2">
    <Swiper
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    modules={[Navigation]}
    spaceBetween={16} slidesPerView="auto">
      {stories.map((story, idx) => (
        <SwiperSlide
          key={idx}
          style={{ width: 120, minWidth: 120 }}
          className="rounded-2xl overflow-hidden shadow-md bg-white"
        >
          <div
            className={`relative h-56 flex flex-col justify-end ${
              story.type === "create"
                ? "bg-white"
                : "bg-cover bg-center"
            }`}
            style={
              story.type !== "create"
                ? { backgroundImage: `url(${story.img})` }
                : {}
            }
          >
            {story.type === "create" ? (
              <div className="flex flex-col items-center justify-center h-full relative">
                <img
                  src={story.img}
                  className="h-32 w-full"
                />
                <button className="bg-blue-500 rounded-full p-2 shadow-lg mb-2 absolute bottom-5">
                  <Plus color="white" size={15} />
                </button>
                <span className="text-gray-800 font-medium">Create story</span>
              </div>
            ) : (
              <>
                <Avatar
                  src={story.avatar}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid white",
                    position: "absolute",
                    top: 12,
                    left: 12,
                  }}
                />
                <div className="bg-gradient-to-t from-black/70 to-transparent absolute inset-0 z-10" />
                <span className="relative z-20 text-white font-medium text-lg p-3">
                  {story.label}
                </span>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default MainStory;
