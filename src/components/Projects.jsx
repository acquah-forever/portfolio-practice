import React from 'react'
import { motion } from 'motion/react'

const Projects = ({ photo, title, description, js, tail, react }) => {

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChilderen: 1, ease: "easOut", duration: 0.3 } }
  }
  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }


  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className='border rounded-xl p-5 flex flex-col h-full  shadow-sm'>
      <motion.div variants={children} whileHover={{ scale: 1.2, y: -50 }} whileTap={{ scale: 1.2, y: -10 }} className='mb-7 mt-5 w-full h-50 sm:h-55 md:h-60 flex items-center justify-center overflow-hidden'>
        <img className='h-full object-contain' src={photo} alt="image" />
      </motion.div>
      <div>
        <h1 className='mb-7 text-2xl font-semibold text-center'>{title}</h1>
        <h2 className='px-2 mb-7 text-center text-base sm:text-md'>{description}</h2>
        <h1 className='w-full mb-7 text-xl font-semibold text-center'>BUILT WITH:</h1>
      </div>

      <div className='mb-7 flex justify-center gap-7 items-center loading-lazy'>
        <img className='w-10 h-10 object-contain' src={js} alt="javascript" />
        <img className='w-10 h-10 object-contain' src={tail} alt="tailwind" />
        <img className='w-10 h-10 object-contain' src={react} alt="react" />
      </div>
      <button className='mx-7 bg-emerald-400 p-2 rounded-md'>Launch</button>

    </motion.div>
  )
}

export default Projects
