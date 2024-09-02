import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <div className='min-h-[1vh] mt-[5%] max-w-screen bg-[#99CAB7] '>
      <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48'>
        <div className='space-y-7 py-10 text-center'>
          <div>
            <img src={logo} alt="" />
          </div>
        
          <p className='text-black text-xs mt-2'>&copy; 2023 FSD minor project</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
