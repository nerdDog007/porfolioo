import React from 'react'

function Skills() {
  return (
    <section className='flex flex-col items-center gap-8'>
        <h1 className='text-3xl font-medium'>My Github Contributions</h1>
            <img src="https://ghchart.rshah.org/nerdDog007" alt="GitHub Contributions Chart" className='w-fit h-fit'></img>
            {/* <iframe src="https://github.com/sandeshkc" width="100%" height="500px"></iframe> */}
    </section>
  )
}

export default Skills