import React from 'react'
import clock from '../assets/clockk.webp'
import bigCash from '../assets/bigCash.jpg'
import goodReads from '../assets/goodReads.jpg'
function Projects() {
  return (
    <div className='w-screen h-fit flex flex-col gap-4 items-center p-4'>
        <h1 className='text-3xl font-semibold'>My Projects</h1>
        <ul className='flex flex-col gap-12 items-center justify-center lg:flex-row navv'>
            <ProjectList projectImage={bigCash} projectName='Big Cash' projectLink='https://github.com/nerdDog007/big-cash'  projectInfo='Survey Junkie is an online platform that connects users with market research companies by offering paid surveys.'/>
            <ProjectList projectImage={goodReads} projectName='Good Reads' projectLink='https://github.com/nerdDog007/good-reads'  projectInfo=' Recommends titles using a powerful engine analyzing billions of data points. Also offers curated lists, user-generated polls, and the popular Goodreads Choice Awards .'/>
        </ul>
    </div>
  )
}


function ProjectList({ projectName, projectLink, projectImage, projectInfo }) {
    return (
      <li>
        <a href={projectLink} className='flex flex-col gap-4 items-center justify-center w-full h-full rounded-lg border-2 border-black p-4'>
          <img src={projectImage} alt={projectName} className='w-full h-full rounded-lg object-cover' />
          <h2 className='text-xl font-semibold'>{projectName}</h2>
          <p className='text-sm'>{projectInfo}</p>
          <a href='https://github.com/nerdDog007' className='text-sm border-2 border-amber-50 p-4 text-purple-400'>View Source Code</a>
        </a>
      </li>
    );
  }
  
export default Projects
// https://github.com/nerdDog007/