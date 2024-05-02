import React from 'react'
import Card from './Card.jsx'
import { GoDotFill } from "react-icons/go";

function CardArea() {
  return (
    <div data-scroll data-scroll-speed="0.3" data-scroll-container className='w-full h-full pb-6'>

      <div className="textContainer border-b-[1px] border-zinc-800 w-full px-12">
        <h1 className='font-["roboto_slab"] text-[8vh] leading-none tracking-tight font-light text-white py-[8vh]'>
          Featured Projects
        </h1>
      </div>

      <div className="cardContainer flex justify-between px-12">

        <Card
          data-scroll
          data-scroll-speed="0.2"
          headerText='Fyde'
          imageUrl="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
          buttonArray={["Audit", "Copywriting", "Sales Deck", "Slides Design"]}
          textDirection='left'
        />

        <Card
          headerText='Vise'
          imageUrl="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
          buttonArray={["Agency", "Company Presentation"]}
          textDirection='right'
        />

      </div>

      <div className="flex w-full h-full items-center justify-center mt-[10vh]">
        <div className="buttonContainer h-full flex items-center justify-center gap-4 text-white font-['overpass'] uppercase border-[1px] rounded-full py-3 px-5">
          <h1>View All Case Studies</h1>
          <GoDotFill />
        </div>
      </div>

    </div>
  )
}

export default CardArea