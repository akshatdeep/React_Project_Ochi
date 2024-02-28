import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 py-1'>
            <div className="textstructure mt-52 px-20 ">
                <div className="masker overflow-hidden" >
                    <h1 className='uppercase text-[7.5vw] font-["Founders Grotesk"]  leading-[6vw] tracking-tighter font-medium'>WE CREATE</h1>
                    
                    <div className="masker flex items-center overflow-hidden">
                        <div className='h-[5vw] w-[8vw]  bg-red-500 relative rounded-md top-[0.4vw]'></div>
                        <h1 className='uppercase text-[7.5vw] font-["Founders Grotesk"]  leading-[6vw]  tracking-tighter font-medium'>EYE OPENING</h1>
                    </div>

                    <div className="masker overflow-hidden">
                        <h1 className='uppercase text-[7vw] font-["Founders Grotesk"]  leading-[6vw]  tracking-tighter font-medium'>PRESENTATIONS</h1>
                    </div>

                </div>
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-[5vw] flex  justify-between items-center px-16 py-5'>
                {["For public and private companies",
                    "From the first pitch to IPO"].map((item, index) => <p className='leading-none '>{item}</p>)}
                <div className="start flex items-center gap-1">
                    <div className='px-4 py-1 border-[1px] border-white rounded-3xl capitalize '>Start the project</div>
                    <div className='px-2 py-2 rounded-full border-[1px] border-white' >
                        <span className=' cursor-pointer rotate-[45deg]'>
                            < FaArrowUpLong />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage