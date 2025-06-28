import React from 'react';
import { Card, Button, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {BgSignup} from '../../../shared/Imageurl'
import {useNavigate} from 'react-router-dom'

const ForgotPassw = () => {
  const router = useNavigate();
  return (
    <div className="w-full h-screen">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-1 w-full h-screen"
          style={{
            backgroundImage: `url(${BgSignup})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Optionally, you can add an overlay for darkness */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center border h-screen">
        {/* <div className="absolute inset-0 bg-black bg-opacity-1" /> */}
        <div className="flex flex-col text-white lg:pl-32">
          <h1 className="text-6xl font-bold mb-4">SVRYN</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Social media for creators, seekers, and
            <span className="text-white"> truth-tellers.</span>
          </h2>
          <p className="mb-2 text-lg">
            No shadow bans. No data mining. No doomscrolling. Just reels, spaces, news, and ethical ads — all aligned with your values.
          </p>
          <p className="mb-6 text-lg">
            No shadow bans, no tracking, no noise — just freedom to connect. Reels, spaces, news, and ethical ads, aligned with your values.
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={()=>router('/login')}
            className="!bg-black !text-white !rounded-lg !px-8 !py-2 !text-lg !font-semibold shadow-lg w-[40%]"
          >
            Log in
          </Button>
        </div>
      {/* Right Side: ForgotPassw Card */}
      <div className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='lg:w-[55%]'
        >
          <Card className="rounded-2xl shadow-2xl bg-[#f9f7f4] py-5 px-10 flex flex-col lg:space-y-3">
            <Typography variant="h5" align="center" className="font-bold mb-2">
            Forgot Your Password
            </Typography>
            <Typography variant="caption" align="center" className="mb-6 font-normal text-[#373737]">
            Enter your email address below, and we’ll send you a link to reset your password.
            </Typography>
            <Box component="form" className="flex flex-col gap-4">
              <input name="Email" className='rounded-xl border border-[#373737] placeholder:text-[#373737] placeholder:text-sm p-2' placeholder='Rachel781stinson@gmail.com ' />
              <Button
                variant="contained"
                color="inherit"
                className="!bg-black !text-white !rounded-lg !py-3 !text-sm !font-normal mt-2 "
                fullWidth
              >
               Request Link
              </Button>
            </Box>
          </Card>
        </motion.div>
      </div>
      </div>

    </div>
  );
};

export default ForgotPassw;
