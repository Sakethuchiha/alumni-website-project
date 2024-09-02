import React from 'react';

function Ourvalues() {
  return (
    <div className='space-y-8 ml-[8%] mr-[7%] '>
      <div className='space-y-8'>
        <div className='font-display space-y-2  '>
          <p className='text-black font-extrabold text-4xl text-maroon'>Gallery</p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 space-y-2'>
        <div className='col-span-2 border border-black bg-[#385529] min-h-[60vh] rounded-3xl p-5 flex flex-col justify-end md-[10%] mb-8'>
          <div className='flex flex-col items-start space-y-6 p-8 '>
            <div className='flex flex-col items-start space-y-3 '>
              <p className='text-white w-3/5 text-justify '>SEE PHOTOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourvalues;
