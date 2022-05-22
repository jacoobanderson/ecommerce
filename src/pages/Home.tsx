import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import data from '../components/testData.json'

const Home = () => {
  return (
    <div>
      <Navbar current="Home" />
      <Carousel />
      <div className='flex justify-center'>
          <button className='w-72 p-4 bg-[#444242] text-white m-2'>NEW ARRIVALS</button>
          <button className='w-72 p-4 bg-[#444242] text-white m-2'>POPULAR</button>
          <button className='w-72 p-4 bg-[#444242] text-white m-2'>BEST SELLERS</button>
      </div>
      <fieldset className='flex justify-center border-t border-solid border-[#444242] p-3 text-center mt-16'>
        <legend className='p-6 text-lg'>Recommended</legend>
        <div className='grid grid-cols-3 justify-items-center w-8/12 gap-1'>
            {data.resources2.map((resource, index) => <img
                  src={resource.imageUrl || ''}
                  alt={resource.title}
                  className="object-cover w-full"
                />)}
        </div>
      </fieldset>
      <Footer />
    </div>
  );
};

export default Home;
