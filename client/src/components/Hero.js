import React from 'react'

function Hero() {
  return (
    <div className="  space-y-16  flex flex-col justify-end items-start font-display  bg-[#28332E] min-h-[80vh] border border-black rounded-[2rem] p-14 text-white ">
 
    <div className='w-1/2 space-y-6  ' >
        <h1 className='text-5xl font-bold'> Your Personal Crypto Capitalist
             </h1>
             <p>Birthed by fans of the Doge meme Dashboard. Simply Love, pet, 

           and hold as 5% from each transaction is automatically

           redistributed to Baby Doge holders...</p>
    </div>

    <div className=' flex space-x-6  '>
        <button className='bg-[#60A289] py-[0.5em] px-6 rounded-lg text-white'>
            Get started!
        </button>
    <button className='  bg-[#616262] py-[0.5em] px-6 rounded-lg'>
            Explore
        </button>

    </div>
 
</div>

  )
}
export default Hero