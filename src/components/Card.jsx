import React from 'react'
import { GoDotFill } from "react-icons/go";

function Card({
  headerText = "",
  imageUrl = "",
  buttonArray = [],
  textDirection = ""
}) {

  return (
    <div className='w-[45vw] h-[100vh]  rounded-xl'>

      <div className='header h-[10vh] flex items-center justify-start text-[2.5vh] text-white font-["overpass"] uppercase font-light'>

        <GoDotFill />
        <h1>{headerText}</h1>

      </div>


      <div className="imageContainer h-[80vh] rounded-xl">

        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            objectFit: "cover",
            objectPosition: "center"
          }}
          className={`relative h-[80vh] rounded-xl`}
        >

          <div className={`floatingText absolute top-1/2 ${textDirection}-full -translate-y-1/2 -translate-x-1/2 z-[9] text-[#cdea68] uppercase font-["overpass"] text-[14vh] font-bold tracking-tighter`}>
            <h1>{headerText}</h1>
          </div>

        </div>

      </div>


      <div className="footer h-[10vh] flex items-center justify-start gap-3">
        {
          buttonArray.map((buttonText, index) => (
            <h3 key={index} className='text-white font-[roboto_slab] border-[1px] rounded-full px-3 py-1 uppercase'>{buttonText}</h3>
          ))
        }
      </div>

    </div>
  )
}

export default Card