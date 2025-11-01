import React from 'react'
import bigCash from '../assets/bigCash.jpg'
import goodReads from '../assets/goodReads.jpg'
import rottenTomatoes from '../assets/3.png'
function Projects() {
  return (
    <div className='w-screen h-fit flex flex-col gap-4 items-center p-4'>
        <h1 className='text-3xl font-semibold'>My Projects</h1>
        <ul className='flex h-fit flex-col gap-12 items-center justify-center lg:flex-row navv'>
            <ProjectList projectImage={bigCash} projectName='Big Cash' projectLink='https://github.com/nerdDog007/surveyFreak'  projectInfo='Survey Junkie is an online platform that connects users with market research companies by offering paid surveys.'/>
            <ProjectList projectImage={rottenTomatoes} projectName=' Rotten Tomatoes' projectLink='https://github.com/nerdDog007/rottenTomatoes'  projectInfo='A Rotten Tomatoes clone is an online platform that aggregates movie and TV show reviews by combining critic ratings and audience feedback.'/>
            <ProjectList projectImage={goodReads} projectName='Good Reads' projectLink='https://github.com/nerdDog007/BrilliantRead'  projectInfo='A Goodreads clone is an online platform that connects readers by offering book listings, personalized recommendations, and community reviews.'/>
        </ul>
    </div>
  )
}


function ProjectList({ projectName, projectLink, projectImage, projectInfo }) {
    return (
      <li className='h-152 w-fit md:w-110 flex items-center justify-center'>
        <a href={projectLink} className='flex flex-col gap-4 items-center justify-center w-full h-full rounded-lg border-2 border-black p-4'>
          <img src={projectImage} alt={projectName} className='w-full h-2/3 rounded-lg object-cover' />
          <div className='flex flex-col gap-4 items-center justify-center w-full h-1/2'>
          <h2 className='text-xl font-semibold'>{projectName}</h2>
          <p className='text-sm text-center'>{projectInfo}</p>
          <a href={projectLink} className='text-sm border-2 border-amber-50 p-4 text-purple-400'>View Source Code</a>
          </div>
        </a>
      </li>
    );
  }
  
export default Projects
