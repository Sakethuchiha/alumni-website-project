import React from 'react';

function Aboutus() {
  const alumniData = [
    { name: 'Prof. C. V. NARASIMHULU', imageUrl: 'https://www.cbit.ac.in/wp-content/uploads/2023/07/IMG-20230710-WA0008-scaled.jpg', description: 'Principal' },
    { name: 'Prof. Suresh Pabboju', imageUrl: 'https://i1.rgstatic.net/ii/profile.image/806512389808128-1569298946157_Q512/Suresh-Pabboju-2.jpg', description: 'AEC Director' },
    { name: 'Rajesh Kannan', imageUrl: 'https://cbit.irins.org/assets/profile_images/271815.jpg', description: 'Faculty Co-ordinator' },
  ];

  return (
    <div className='mr-52 ml-52 space-y-8 text-3xl font-semibold text-black '>
      <div className='h-[70vh]'>
        <section className="bg-gray-100 md-12">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg w-fit" style={{ textAlign: 'justify' }}>Chaitanya Bharathi Institute of Technology (CBIT) is a distinguished educational institution dedicated to delivering top-notch engineering and technological education. Founded in 1979, CBIT boasts a storied legacy of nurturing talent, fostering innovation, and producing highly skilled professionals. The institute's commitment to excellence, combined with cutting-edge facilities, has established CBIT as a premier center for academic and research endeavors. Prioritizing holistic development, CBIT imparts values, knowledge, and practical skills to its students, equipping them for successful careers and meaningful contributions to society.</p>
              </div>
              <div className="mt-12 md:mt-0">
                <img src="https://tse3.mm.bing.net/th?id=OIP.qLibUdmfP0zNjTttGd-dcQHaE8&pid=Api&P=0&h=220" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='space-y-8' style={{ marginTop: '5rem', paddingBottom: '50px' }}>
        <div className='font-display space-y-2'>
          <p className='text-black font-extrabold text-4xl'> Members </p>
        </div>
        <div className='grid grid-cols-3 gap-3 space-x-2'>
          {alumniData.map((alumni, index) => (
            <div key={index} className='relative border border-black min-h-[20vh] rounded-full overflow-hidden'>
              <img
                className="h-full w-full object-cover"
                src={alumni.imageUrl}
                alt={`Alumni ${index + 1}`}
              />
              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-25 text-white p-2 text-center'>
                <p className="text-lg font-semibold">{alumni.name}</p>
                <p className="text-sm">{alumni.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
