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
    <div className='px-6 py-16  min-h-screen grid gap-10 sm:grid sm:grid-cols-2 mx-auto max-w-6xl'>
      <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className='w-full flex flex-col rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl  transition-all duration-300 overflow-hidden'>
        <motion.div variants={children} className='p-6 flex flex-col flex-grow"'>
          <img className='w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 hover:scale-105' src={Landing} alt="" />
        </motion.div>

        <motion.div variants={children} className='px-6'>
          <h1 className='text-xl font-semibold mb-4 text-center sm:text-left'>MY LANDING PAGE</h1>
          <div className='mb-6'>
            <h2 className='text-slate-500 dark:text-slate-400 mb-2 text-sm tracking-wide text-center sm:text-left'>DESCRIPTION</h2>
            <motion.p className='text-sm text-slate-700 dark:text-slate-300 text-center sm:text-left' variants={children}>A landing page exhibiting my skills in React JS and TailwindCSS..</motion.p>
          </div>
          <motion.div variants={children} className='mt-auto'>
            <h1 className='text-slate-500 dark:text-slate-400 mb-3 text-sm tracking-wide text-center sm:text-left'>BUILT WITH</h1>

            <div variants={children} className='flex justify-center sm:justify-start gap-4'>
              <img className='w-10 h-10 md:w-12 md:h-12' src={JS} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12' src={REACT} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12' src={TAILWIND} alt="icon" />

            </div>
          </motion.div>
        </motion.div>
      </motion.div >


      <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className='w-full flex flex-col rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl  transition-all duration-300 overflow-hidden'>
        <motion.div variants={children} className='p-6 flex flex-col flex-grow"'>
          <img className='w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 hover:scale-105' src={Landing1} alt="" />
        </motion.div>

        <motion.div variants={children} className='px-6'>
          <h1 className='text-xl font-semibold mb-4 text-center sm:text-left'>AI AUTOMATION</h1>
          <div className='mb-6'>
            <h2 className='text-slate-500 dark:text-slate-400 mb-2 text-sm tracking-wide text-center sm:text-left'>DESCRIPTION</h2>
            <motion.p className='text-center sm:text-left text-sm sm:text-md' variants={children}>A page exhibiting my skills in React JS and TailwindCSS.</motion.p>
          </div>
          <motion.div variants={children} className='mt-auto'>
            <h1 className='text-slate-500 dark:text-slate-400 mb-3 text-sm tracking-wide text-center sm:text-left'>BUILT WITH</h1>

            <div variants={children} className='flex justify-center sm:justify-start gap-4'>
              <img className='w-10 h-10 md:w-12 md:h-12' src={JS} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12' src={REACT} alt="icon" />
              <img className='w-10 h-10 md:w-12 md:h-12' src={TAILWIND} alt="icon" />

            </div>

          </motion.div>
        </motion.div>
      </motion.div >

    </div>

  )
}

export default Projects
