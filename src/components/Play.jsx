import React, { useEffect, useState } from 'react'

function Play() {

  const [lineAngle, setLineAngle] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {

      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = (window.innerWidth / 2) - mouseX
      let deltaY = (window.innerHeight / 2) - mouseY

      let angleInRadian = Math.atan2(deltaY, deltaX)
      let angleInDegree = (180 / Math.PI) * angleInRadian

      setLineAngle(angleInDegree)

    })
  })

  return (
    <div data-scroll data-scroll-speed="-0.1" className='play w-full h-screen object-contain'>
      <div className='rounded-2xl relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>

        <div className="eyeContainer absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between gap-[10vw]">

          <div className="eye bg-zinc-100 w-[30vh] h-[30vh] rounded-full flex justify-center items-center">
            <div className="blackCircle bg-zinc-900 w-2/3 h-2/3 rounded-full flex justify-center items-center">
              <div style={{ transform: `rotate(${lineAngle}deg)` }} className={"lineInsideBlackCircle w-full h-10"}>
                <div className="whiteCircleInsideLine w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="eye bg-zinc-100 w-[30vh] h-[30vh] rounded-full flex justify-center items-center">
            <div className="blackCircle bg-zinc-900 w-2/3 h-2/3 rounded-full flex justify-center items-center">
              <div style={{ transform: `rotate(${lineAngle}deg)` }} className="lineInsideBlackCircle w-full h-10">
                <div className="whiteCircleInsideLine w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Play



// video link
// https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4

// image link
// https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg
// https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg