import React from 'react'

function Cards() {
  return (
    <div className='w-full'>
        <div className='w-full h-screen flex gap-5 items-center px-20'>
            <div className="card h-[50vh] w-1/2 bg-[#004D43] rounded-2xl flex justify-center items-center relative">

                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-5 bottom-7 px-5 py-1 
                border-[#CDEA68] border-[1px] rounded-full text-[#CDEA68]'>&copy;2019-2023</button>
            </div>
            <div className='h-[50vh] w-1/2 flex gap-5'>
                <div className='h-full w-1/2 bg-[#212121] rounded-2xl flex justify-center items-center relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-5 bottom-7 px-3 py-1 
                border-white border-[1px] rounded-full text-white tracking-tighter uppercase'>rating 5.0 on clutch</button>
                </div>
                <div className='h-full w-1/2 bg-[#212121] rounded-2xl flex justify-center items-center relative'>
                    <img className='h-[20vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-5 bottom-7 px-3 py-1 
                     border-white border-[1px] rounded-full text-white tracking-tighter uppercase'>Business Bootcamp
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards