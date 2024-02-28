import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate, setrotate] = useState()

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth/2
      let deltaY = mouseY - window.innerHeight/2

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      setrotate(angle-180)
    })
  })
  return (
    <div className='eyes w-full h-screen '>
      <div className='w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center relative '>

        <div className='absolute flex justify-center items-center gap-20 h-72 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

          <div className='h-52 w-52 flex justify-center items-center rounded-full bg-white'>
          <h1 className='text-white absolute z-[999] uppercase font-semibold'>play</h1>
            <div className='h-32 w-32 bg-zinc-900 rounded-full relative  '>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-5  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
                <div className='h-5 w-5 bg-white rounded-full  '></div>
              </div>

            </div>
          </div>
          <div className='h-52 w-52 flex justify-center items-center    rounded-full bg-white'>
            <h1 className='text-white absolute z-[999] uppercase font-semibold'>play</h1>
            <div className='h-32 w-32 bg-zinc-900 rounded-full relative  '>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-5  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
                <div className='h-5 w-5 bg-white rounded-full  '></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Eyes