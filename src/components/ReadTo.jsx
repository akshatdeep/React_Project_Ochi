import React from 'react'

function ReadTo() {
  return (
    <div className='w-full min-h-screen bg-[#CDEA68] relative '>
        <div className='h-[30vh] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5'>
            <div className='h-full w-[30vh] bg-white rounded-full relative flex justify-center items-center'> 
                <div className='h-2/3 w-[9vw] bg-black absolute z-50 rounded-full'>
                    <div className=''></div>
                </div>
            </div>
            <div className='h-full w-[30vh] bg-white rounded-full relative flex justify-center items-center'>
            <div className='h-2/3 w-[9vw] bg-black  z-50 rounded-full absolute'></div>
            </div>
        </div>
        <div className='w-full  flex justify-center items-center flex-col '>
            <h1 className='text-zinc-900 text-[15vw] flex-nowrap leading-[13vw] font-bold text-center mt-10'>Ready <br /> to start <br /> the project?</h1>
            <button className='py-4 px-7 border-black border-2 text-white mt-[10vw] rounded-full bg-black uppercase font-semibold'>start the project</button>
            <button className='py-4 px-7 border-black border-2 text-black mt-[4vw] rounded-full bg-[#CDEA68] uppercase font-semibold'>start the project</button>
            <div className='h-[20vh] w-full'></div>
        </div>
        
    </div>
  )
}

export default ReadTo