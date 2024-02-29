import { split } from 'postcss/lib/list'
import React from 'react'

function Featured() {
  return (
    <div className='w-full py-10 '>
        <div className='w-full px-10'>
            <h1 className='text-white text-[4vw]'>Featured Projects</h1>
        </div>
        <div className='border-white border-[1px] mt-[4vw] opacity-[0.5]'>
        </div>
        <div className='w-full h-screen mt-8 flex relative'>
                <h1 className='text-[#cdea68] absolute left-1/2 text-[5vw]  font-semibold track top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {"FYDE".split("").map((item,index)=>(
                    <span>{item}</span>))}
                </h1>
                <h1 className='text-[#cdea68] absolute left-1/2 text-[5vw]  font-semibold track top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {"VISE".split("").map((item,index)=>(
                    <span>{item}</span>))}
                </h1>
            <div className='left h-full w-1/2  '>
                <h4 className='uppercase pt-10 px-[4.5vw] font-semibold'>fyde</h4>
                
                <div
                className='flex justify-center items-center '>
                    <div className='w-[90vh] h-[70vh] '>
                        <img className='h-full w-full bg-cover bg-center rounded-2xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='right h-full w-1/2 '>
            <h4 className='uppercase pt-10 px-[4.5vw] font-semibold'>VISE</h4>
                <div
                className='flex justify-center items-center '>
                    <div className='w-[90vh] h-[70vh] rounded-2xl'>
                        <img className='h-full w-full bg-cover bg-center rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>


        <div className="mian-2 w-full relative">
            <h1 className='text-[#cdea68] absolute left-1/2 text-[5vw]  font-semibold track top-1/2 -translate-x-1/2 -translate-y-1/2'>
                {"TRAWA".split("").map((item, index)=>(
                    <span>{item}</span>
                ))}
            </h1>
            <h1 className='text-[#cdea68] absolute left-1/2 text-[5vw]  font-semibold track top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter'>
                {"PREMIUM BLEND".split("").map((item, index)=>(
                    <span>{item}</span>
                ))}
            </h1>
            <div className='w-full h-screen flex'>
                <div className="left w-1/2 h-full ">
                        <h4 className='pt-10 px-[4.5vw] font-semibold'>TRAWA</h4>
                        <div className=' flex justify-center items-center'>
                            <div className=' w-[90vh] h-[70vh] '>
                                <img className='bg-cover h-full w-full rounded-2xl' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            </div>
                        </div>
                </div>
                <div className="right w-1/2 h-full">
                        <h4 className='pt-10 px-[4.5vw] font-semibold'>TRAWA</h4>
                        <div className=' flex justify-center items-center'>
                            <div className='w-[90vh] h-[70vh] '>
                                <img className='h-full w-full bg-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured