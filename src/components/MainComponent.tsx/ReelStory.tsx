import React from 'react';
import { Clapperboard} from 'lucide-react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Example images (replace with your own assets or URLs)
const reels = [
  {
    img: '/src/assets/post1.png',
    text: 'Best game to play',
  },
  {
    img: '/src/assets/post2.png',
    text: 'Join the Real word',
  },
  {
    img: '/src/assets/online1.png',
    text: 'Start a business',
  },
  {
    img: '/src/assets/online2.png',
    text: 'Good Vibes',
  },
  {
    img: '/src/assets/online3.png',
    text: 'Adventure Time',
  },
  {
    img: '/src/assets/online4.png',
    text: 'Nature Beauty',
  },
  {
    img: '/src/assets/online5.png',
    text: 'City Life',
  },
  {
    img: '/src/assets/online6.png',
    text: 'Travel Dreams',
  },
  {
    img: '/src/assets/online7.png',
    text: 'Food Adventures',
    hasArrow: true,
  },
];

const ReelStory = () => {
  return (
    <div className="bg-[#afc2cf41] rounded-2xl p-4 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clapperboard size={28} />
          <span className="text-xl font-semibold">Reels</span>
        </div>
        <Button
          variant="text"
          startIcon={<span className="text-xl">+</span>}
          sx={{ color: '#6cb4f7', fontWeight: 600, fontSize: '1.1rem', textTransform: 'none' }}
        >
          Create
        </Button>
      </div>
      {/* Reels Cards with Swiper */}
      <Swiper
        spaceBetween={16}
        slidesPerView={3.2}
        className="pb-2"
        style={{ paddingBottom: '0.5rem' }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      >
        {reels.map((reel, idx) => (
          <SwiperSlide key={idx} style={{ width: 150, minWidth: 200 }}>
            <div className="relative h-[320px] rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
              <img
                src={reel.img}
                alt={reel.text}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-lg font-medium drop-shadow-md">
                  {reel.text}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelStory;