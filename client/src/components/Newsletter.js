import React from 'react'

function Newsletter() {
  return (
    <div>
    <div className=' text-center py-9 space-y-3'>

        <h1 className='font-extrabold text-4xl '>Receive Updates</h1>
        <p className='text-[#898CA9]'>Unsubscribe at any time. <span className='font-semibold text-black'>Privacy policy ↗</span></p>
        <form>
  <label >
    
    <input class=" border border-black placeholder-black contrast-more:border-black bg-transparent rounded-md text-black p-3" type="text" placeholder="Enter your email"></input>
  </label>
</form>

    </div>
    


    
    </div>
  )
}

export default Newsletter