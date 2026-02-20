import React from 'react'
import { motion } from 'motion/react'
import JS from '../assets/js.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import Landing from '../assets/landing page.jpeg'
import Landing1 from '../assets/landing page1.jpeg'

const Projects = () => {


  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='px-7  min-h-screen flex flex-col sm:grid sm:grid-cols-2 justify-items-center'>
      <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className='mt-10 flex flex-col rounded-3xl max-w-xs sm:max-w-sm h-110 sm:h-130 border'>
        <motion.div variants={children} className='mt-8 flex justify-center'>
          <img className='object-cover px-12 sm:px-5 max-w-xs sm:max-w-sm h-auto mb-7 hover:scale-130 sm:hover:scale-105 transition-all ease-in-out duration-300' src={Landing} alt="" />
        </motion.div>

        <motion.div variants="children" className='px-6'>
          <h1 className='text-center sm:text-left text-lg sm:text-xl mb-3'>MY LANDING PAGE</h1>
          <div className='mb-5'>
            <h2 className='mb-3 text-slate-500 text-center sm:text-left dark:text-slate-300'>DESCRIPTION</h2>
            <motion.h2 className='text-center text-sm sm:text-md sm:text-left' variants={children}>A landing page exhibiting my skills
              <br />
              in React JS and TailwindCSS.</motion.h2>
          </div>
          <motion.div variants={children} className='flex flex-col space-y-5'>
            <h1 className='text-slate-500 text-center sm:text-left dark:text-slate-300'>BUILT WITH</h1>

            <motion.div variants={children} className='flex justify-center sm:justify-start space-x-4 will-change-transform'>
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={JS} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={REACT} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={TAILWIND} alt="icon" />

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div >


      <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className='mt-10 flex flex-col rounded-3xl max-w-xs sm:max-w-sm h-115 sm:h-130 border'>
        <motion.div variants={children} className='mt-8 flex justify-center'>
          <img className='object-cover px-12 sm:px-5 max-w-xs sm:max-w-sm h-auto mb-7 hover:scale-130 sm:hover:scale-105 transition-all ease-in-out duration-300' src={Landing1} alt="" />
        </motion.div>

        <motion.div variants="children" className='px-6'>
          <h1 className='text-lg sm:text-xl text-center sm:text-left mb-3'>AI AUTOMATION</h1>
          <div className='mb-5'>
            <h2 className='text-slate-500 mb-3 text-center sm:text-left dark:text-slate-300'>DESCRIPTION</h2>
            <motion.h2 className='text-center sm:text-left text-sm sm:text-md' variants={children}>A page exhibiting my skills
              <br />
              in React JS and TailwindCSS.</motion.h2>
          </div>
          <motion.div variants={children} className='flex flex-col space-y-5'>
            <h1 className='text-slate-500 text-center sm:text-left dark:text-slate-300'>BUILT WITH</h1>

            <motion.div variants={children} className='flex justify-center sm:justify-start space-x-4 will-change-transform'>
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={JS} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={REACT} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12 object-cover' src={TAILWIND} alt="icon" />

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div >

    </div>

  )
}

export default Projects
