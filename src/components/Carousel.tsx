import React from 'react'
import { useState, useRef, useEffect } from 'react';
import data from './testData.json';

const Carousel = () => {
  
return (
  <div className="flex flex-row justify-center">
        {data.resources.map((resource, index) => {
          return (
            <div key={index} className="m-5 mt-16">
                <img
                  src={resource.imageUrl || ''}
                  alt={resource.title}
                  className="w-52 h-80 object-cover"
                />
            </div>
          );
        })}
      </div>
);
}

export default Carousel