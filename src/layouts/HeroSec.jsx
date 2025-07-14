import React, { useEffect, useState } from 'react'
import img1 from '../assets/space.webp'


function HeroSec() {
  const [info, setInfo] = useState('');
  const text = 'Full stack developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfo((prev) => {
        if (index >= text.length) {
          setIndex(0);
          return '';
        }
        setIndex(index + 1);
        return text.slice(0, index + 1);
      });
    }, 150); // speed of typing

    return () => clearInterval(interval); // cleanup on unmount
  }, [index, text]);
    
  return (
    <div className='w-screen h-[90vh] flex flex-col md:flex-row items-center'>
        <img src={img1} alt="" className='w-[60%] h-[60%] order-1'/>
        <div className='w-[100%] h-[40%] order-2 flex flex-col justify-center items-center gap-8'>
            <h1 className='text-2xl md:4xl font-semibold jj'>One Portfoio to rule them all.</h1>
            <p className='text-2xl font-medium md:text-4xl jj'>I am Sandesh Khatri</p>
            <p className='text-green text-2xl info capitalize font-bold jj md:text-4xl'>{info}</p>
        </div>
    </div>
  )
}
export default HeroSec


