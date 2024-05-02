import React from 'react'
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full h-[120vh] bg-[#CDEA68] rounded-2xl'>

      <h1 className='font-["roboto_slab"] pt-[15vh] pb-[9vh] px-12 text-[7vh] leading-none font-light border-b-[1px] border-zinc-600'>
        Ochi is a strategic partner for fast-growing tech businesses that need to <u>raise funds</u>, <u>sell products</u>, <u>explain complex ideas</u>, and <u>hire great people</u>.
      </h1>

      <div className="aboutBottom flex justify-between px-12 pt-8">

        <div className="leftPart">
          <h1 className='font-["roboto_slab"] text-[8vh] tracking-tight'>Our Approach</h1>
          <button className='bg-[#212121] text-white font-semibold py-4 pl-12 pr-8 mt-4 rounded-full flex items-center justify-between gap-4'>
            <h1 className='font-["roboto_slab"]'>READ MORE</h1>
            <GoDotFill />
          </button>
        </div>

        <div className="imageContainer w-[45vw] object-contain">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className='rounded-2xl'
          />
        </div>
      </div>
    </div>
  )
}

export default About