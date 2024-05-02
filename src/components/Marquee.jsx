import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-speed="-0.001" className='marquee-container w-full py-[15vh] bg-[#004D43] rounded-2xl'>
      <div className="textContainer flex  text-white w-full border-t-[1px] border-b-[1px] border-zinc-500 whitespace-nowrap overflow-hidden">
        <motion.h1
          className='font-["anton"]  text-[36vh] leading-none w-[200vw]'
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{ease: "linear", duration: 7, repeat: Infinity}}
        >WE ARE OCHI&nbsp;</motion.h1>
        <motion.h1
          className='font-["anton"]  text-[36vh] leading-none w-[200vw]'
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{ease: "linear", duration: 7, repeat: Infinity}}
        >WE ARE OCHI&nbsp;</motion.h1>
        <motion.h1
          className='font-["anton"]  text-[36vh] leading-none w-[200vw]'
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{ease: "linear", duration: 7, repeat: Infinity}}
        >WE ARE OCHI&nbsp;</motion.h1>
      </div>
    </div>
  )

}

export default Marquee