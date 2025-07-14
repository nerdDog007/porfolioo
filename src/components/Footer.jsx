import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDev } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

function Footer() {
  return (
    <footer className='h-fit  w-screen flex flex-col items-center gap-4' >
        <div className='flex flex-col p-8 gap-4 justify-center items-center bg-gray-800'>
            <h1>FIND ME ON</h1>
            <p>Feel free to Feel free to <span className='jj'>connect </span> with me</p>
            <ul className='flex gap-4 text-2xl'>
                <li><a href='https://github.com/nerdDog007' target='_blank' rel='noreferrer'><FaGithub className='text-white'/></a></li>
                <li><a href='https://www.linkedin.com/in/sandesh-kc-a-dev/' target='_blank' rel='noreferrer'><CiLinkedin className='text-white'/></a></li>
                <li><a href='https://dev.to/sandeshkc' target='_blank' rel='noreferrer'><FaDev className='text-white'/></a></li>
                <li><a href='https://medium.com/@sandeshkc' target='_blank' rel='noreferrer'><FaMediumM className='text-white'/></a></li>
            </ul>
        </div>
        <div>
        <p>
        Developed & Designed with ❤️ by Me.
        </p>
        </div>

    </footer>
  )
}

export default Footer