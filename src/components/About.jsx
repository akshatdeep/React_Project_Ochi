import React from 'react'

function About() {
    return (
        <div className='w-full bg-[#CDEA68] -py-[10vw] rounded-3xl '>
            <div className='p-[3vw]'>
                <h1 className='text-black text-[3.5vw] whitespace-nowrap font-semibold leading-none'>Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to <span className=''>raise funds, sell prod­ucts,</span> <br /> <span>ex­plain com­plex ideas,</span> and <span>hire great peo­ple.</span> </h1>
            </div>
            <div className='border-[1px] border-zinc-800 mt-[3vw] opacity-[.5]'>

            </div>
            <div className='flex justify-around'>
                <div>
                    <p className='text-black py-4 px-14'>What you can expect:</p>
                </div>
                <div>
                    <p className='text-black py-4'>
                        We create tailored presentations to help <br /> you persuade your colleagues, clients, or <br /> investors. Whether it’s live or digital, <br /> delivered for one or a hundred people.
                        <br />
                        <br />

                        We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing, <br /> and captivating.

                    </p>

                </div>
                <div>
                    <p className='text-black py-[15vw]'>S:

                        Instagram <br />
                        Behance <br />
                        Facebook <br />
                        Linkedin</p>
                </div>
            </div>
            <div className='w-full border-t-[1px] border-zinc-800  '></div>
            <div className='flex justify-around pb-[10vw]'>
                <div>
                    <h1 className='text-black text-[5vw] tracking-tighter'>Our approach:</h1>
                    <div className='flex'>
                    <button className='py-3 px-5 border-2 ml-4 rounded-full bg-zinc-900 border-zinc-900 mt-7 flex justify-center items-center gap-5' >READ MORE  <div className='h-4 w-4 bg-white rounded-full'></div></button>
                    </div>
                </div>
                <div className='h-[70vh] w-[40vw] mt-9 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] rounded-3xl'>
                    
                </div>
            </div>
        </div>
    )
}

export default About