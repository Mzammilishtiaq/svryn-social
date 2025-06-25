import React, { useState, useEffect } from "react";
import { Button, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import {LoginPhone,Login1,Login2,Login3,Logo} from '../../../shared/Imageurl';
import {useNavigate} from 'react-router-dom'
const SplashScreen = () => (
  <div className="flex items-center justify-center h-screen bg-[#10151e]">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-8">
        <span className="text-blue-500">SVRYN</span> SOCIAL
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        transition={{ duration: 2 }}
        className="mx-auto"
      >
        <LinearProgress color="primary" style={{ height: 4, borderRadius: 2 }} />
      </motion.div>
    </div>
  </div>
);

const LoginPage = () => {  
    const router = useNavigate();
    return(
  <div className="flex min-h-screen">
    {/* Left Section */}
    <div className="w-1/2 bg-[#f8f8f3] p-16 flex flex-col justify-center">
      <img src={Logo} className="w-36 h-20"/>
      <h2 className="text-xl font-semibold text-[#b3c1ce] mb-2">
        The social network for sovereign beings
      </h2>
      <hr className="border-[#b3c1ce] mb-4" />
      <p className="text-[#7faac7] font-bold mb-2">
        Break free from the algorithm.<br />
        Speak freely.<br />
        Connect consciously.
      </p>
      <p className="mb-4 text-[#444]">
        SVRYN is not just another platform - it's a movement...
      </p>
      <h3 className="font-bold mb-2">Why SVRYN</h3>
      <ul className="list-disc pl-5 text-[#444] mb-4">
        <li>Unfiltered Expression – Speak your truth without censorship.</li>
        <li>Interest-Led Feeds – Your experience is shaped by your vibe, not algorithms.</li>
        <li>Hosted for Freedom – Our servers honour your rights and privacy.</li>
        <li>Built to Unite – Created for conscious connection, not division.</li>
        <li>Multi-Realm – Media, marketplace, groups, pages, soul-aligned commerce</li>
      </ul>
      <p className="text-[#b3c1ce] font-bold mt-8">
        This is where the new world begins.<br />
        Not a matrix. A mirror.<br />
        For those who came to awaken.
      </p>
    </div>
    {/* Right Section */}
    <div className="w-1/2 bg-[#b3c1ce] flex flex-col items-center justify-center relative">
      {/* Phone Mockup (replace with your image if needed) */}
        <img src={Login1} alt="Phone" className="w-28 rounded-2xl absolute -left-14 top-[5%]" />
        <img src={Login2} alt="Phone" className="w-28 rounded-2xl absolute -left-14 top-[20%]" />
        <img src={Login3} alt="Phone" className="w-28 rounded-2xl absolute -left-14 top-[35%]" />
      <div className="mb-8">
        <img src={LoginPhone} alt="Phone" className="w-60 rounded-2xl" />
      </div>
      <form className="bg-white rounded-lg shadow-lg p-8 w-80 flex flex-col gap-4">
       <input placeholder="Email" name="email" className="rounded-xl border border-[#373737] p-2"/>
       <input placeholder="Password" name="password" className="rounded-xl border border-[#373737] p-2"/>
        <Button variant="contained"  sx={{backgroundColor:'#AFC2CF'}} fullWidth onClick={()=>router('/')}>
          Login
        </Button>
        <div className="flex justify-end items-end">
          <span className="text-sm text-[#AFC2CF] font-semibold cursor-pointer">Forget Password?</span>
        </div>
        <Button variant="contained" fullWidth style={{ background: "#4EAAE9", color: "#fff" }}>
          JOIN SVRYN
        </Button>
      </form>
    </div>
  </div>
)};

const Login = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <LoginPage />;
};

export default Login;
