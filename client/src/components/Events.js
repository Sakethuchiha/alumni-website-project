import React from 'react';

function About() {
  const alumniData = [
    { name: 'Sekhar Kammula', imageUrl: 'https://www.tollywood.net/wp-content/uploads/2020/05/Sekhar-Kammula-next-is-thriller.jpg', description: 'Telugu film director' },
    { name: 'K Venkat Reddy', imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkllRxVgg0uc8fZLKrksTsD7aidYSqmj1MGB0wofrFsLhS2XO0', description: 'Politician - Congress' },
    { name: 'Y.S Chowdary', imageUrl: 'https://c.ndtvimg.com/2018-11/00gc5pno_y-s-chowdary_625x300_24_November_18.jpg', description: 'Former MP and Minister' },
  ];

  return (
    <div className='space-y-8 ' style={{marginTop:'5rem',paddingBottom:'50px'}}>
      <div className='font-display space-y-2'>
        <p className='text-black font-extrabold text-4xl'>Notable alumni</p>
      </div>
      <div className='grid grid-cols-3 gap-3 space-x-2'>
        {alumniData.map((alumni, index) => (
          <div key={index} className='relative border border-black min-h-[50vh] rounded-full overflow-hidden'>
            <img
              className="h-full w-full object-cover"
              src={alumni.imageUrl}
              alt={`Alumni ${index + 1}`}
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center'>
              <p className="font-bold">{alumni.name}</p>
              <p>{alumni.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
