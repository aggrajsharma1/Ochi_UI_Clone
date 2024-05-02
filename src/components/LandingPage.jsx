import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import React from 'react';
// import { GoArrowUpRight } from "react-icons/go";
// import { BsArrowUpRight } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-0.8" className='w-full h-screen bg-zinc-900 text-white z-10'>

      <div className="textContainer">
        <h1 className='font-["roboto_slab"] pt-[22vh] pl-12 text-[14.5vh] leading-none tracking-tighter selection:text-orange-500'>
          WE CREATE
          <br />
          <div className='flex items-center gap-3'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "9vw" }}
              transition={{ ease: easeInOut, duration: 0.8, delay: 1 }}
              className="hiddenImage bg-red-300 h-20 w-[9vw] rounded-lg"
            >
            </motion.div>
            EYE OPENING
          </div>
          PRESENTATIONS
        </h1>
      </div>

      <div className="font-['overpass'] text-md landingPageFooter border-t-[1px] px-12 pt-4 border-zinc-800 mt-20 flex justify-between items-center">
        <h2>For Public and private companies</h2>
        <h2>From the first pitch to IPO</h2>

        <div className="start flex items-center justify-center gap-2 w-[20vw]">
          <div className='font-["overpass"] font-medium border-zinc-600 border-[1px] rounded-full px-4 py-1 '>
            START THE PROJECT
          </div>
          <div className="arrow border-zinc-600 border-[1px] w-[5vh] h-[5vh] rounded-full flex items-center justify-center">
            <HiArrowUpRight />
          </div>
        </div>

      </div>

    </div>
  )
}

export default LandingPage