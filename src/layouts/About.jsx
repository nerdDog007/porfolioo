import React from 'react'
import img1 from '../assets/img1.jpg'

function About() {
  return (
    <section className='w-screen p-4 section1 flex flex-col gap-4 items-center text-2xl'>
        <h1 className='text-4xl'>About Me</h1>
        <div className='flex flex-col items-center gap-8 lg:flex-row' >
            <div className='w-[100%] h-fit order-2  border-purple-400 flex flex-col gap-6 '>
        <p>I’m a <span>self-taught full-stack developer</span> specializing in the <span>JavaScript</span> ecosystem, with a strong passion for building scalable and user-focused applications. I’m currently developing both a <span>mobile app and a web app</span> for a review and recommendation platform inspired by Yelp, featuring geolocation, dynamic search, and category-based filtering. I’ve also built a <span>Rotten Tomatoes–style movie rating platform</span> and worked on several full-stack projects that strengthened my understanding of clean architecture and code quality. Alongside JavaScript, I have hands-on experience with <span>C programming</span>, which helps me write more optimized and efficient solutions. I work with <span>React, React Native, Next.js, Redux, Tailwind, Node.js, Express, NestJS, MongoDB,</span> and REST APIs, and I’m driven by scalability, performance, and creating products that solve real-world problems.
        </p>
         </div>
        <img src={img1} alt=""  className='w-[50%] h-[50%] order-1 rounded-2xl  border-2 border-purple-400'/>
        </div>
    </section>
  )
}

export default About