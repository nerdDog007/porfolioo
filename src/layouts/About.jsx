import React from 'react'
import img1 from '../assets/img1.jpg'

function About() {
  return (
    <section className='w-screen p-4 section1 flex flex-col gap-4 items-center text-2xl'>
        <h1 className='text-4xl'>About Me</h1>
        <div className='flex flex-col items-center gap-8 lg:flex-row' >
            <div className='w-[100%] h-fit order-2  border-purple-400 flex flex-col gap-6 '>
        <p>I am a <span>full stack developer</span> and a web developer. I have worked on many projects and I am currently working on a project that I am passionate about.</p>
        <p>I am self-taught and I have a strong interest in web development. I have worked on projects that involved web development, mobile development, and backend development.</p>
        <p>My interests change greatly depending on my environment, but at the moment, I am most interested by <span>AI/ML, Ethical Hacking, and Fintech.</span></p>
        <p>My skillset is quite wide-ranged, I don't focus all too heavy on the <span>frameworks/languages</span>, I like to choose the best tools to get the best product as fast as possible. I'm a quick learner, especially in fast-paced environments where I'm able to hone skills on the fly to improve and deliver on time.</p>
         </div>
        <img src={img1} alt=""  className='w-[50%] h-[50%] order-1 rounded-2xl  border-2 border-purple-400'/>
        </div>
    </section>
  )
}

export default About