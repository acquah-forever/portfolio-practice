import React from 'react'
import JS from'../assets/js.png'
import REACT from '../assets/react.png'
import TAILWIND from'../assets/tailwind.png'
import Landing from '../assets/landing page.png'

const Projects = () => {
  return (
    <div className='mt-10 flex flex-col rounded-3xl max-w-xs sm:max-w-sm h-120 sm:h-125s border'>
      <div className='mt-8 flex justify-center'>
        <img className='object-cover px-12 sm:px-5 max-w-xs sm:max-w-sm h-auto mb-7 hover:scale-130 sm:hover:scale-105 transition-all ease-in-out duration-300' src={Landing} alt="" />
      </div>

      <div className='px-6'>
        <h1 className='text-xl mb-3'>MY LANDING PAGE</h1>
        <div className='mb-5'>
          <h2 className='text-slate-500 dark:text-slate-300'>DESCRIPTION</h2>
          <h2>A landing page exhibiting my skills
            <br />
            in React JS and TailwindCSS.</h2>
        </div>
        <div className='flex flex-col space-y-5'>
        <h1 className='text-slate-500 dark:text-slate-300'>BUILT WITH</h1>
        <div className='flex space-x-4 will-change-transform'>
          <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={JS} alt="icon" />
          <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={REACT} alt="icon" />
          <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={TAILWIND} alt="icon" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
