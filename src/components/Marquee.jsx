import React from 'react'

function Marquee() {
  return (
    <div className='w-full bg-[#004D43] py-10 rounded-t-3xl -mt-[1vw] '>
        <div className='flex whitespace-nowrap border-zinc-100 border-t-[1px] border-b-[1px] overflow-hidden '>
            <h1 className='text-[15vw] font-["Founders Grotesk"] font-bold'>WE ARE OCHI</h1>
            <h1 className='text-[15vw] font-["Founders Grotesk"] font-bold'>WE ARE OCHI</h1>
            <h1 className='text-[15vw] font-["Founders Grotesk"] font-bold'>WE ARE OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee