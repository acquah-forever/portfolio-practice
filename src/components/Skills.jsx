import React from 'react'
import { motion,spring } from 'motion/react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import TAILWIND from '../assets/tailwind.png'
import REACT from '../assets/react.png'
import GITHUB from '../assets/github.png'

const Skills = () => {
    
    let parent = {
        hidden:{opacity:0, y:-60},
        visible:{opacity:1, y:0, transition:{staggerChildren:0.15,ease:"easeOut", duration:0.5}}

    }
    let children = {
        hidden:{opacity:0, x:-50},
        visible:{opacity:1, x:0}
    }

    return (
        <motion.div variants={parent}initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.4 }} className='text-sm flex flex-col mb-6 w-full justify-center dark:text-black'>
            <motion.div variants={children} className='flex justify-center text-2xl sm:text-3xl md:text-4xl text-center sm:text-left font-bold mb-10 px-8'> <h1>Programming Tools I'm Adept In</h1> </motion.div>
            <div className='flex flex-row justify-center space-x-3 sm:space-x-8 md:space-x-12 lg:space-x-20'>
                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.6}} transition={{type:spring, damping:5}} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:w-15 md:h-15 rounded object-cover' src={HTML} alt="html logo" />
                    <p>HTML</p>
                </motion.div>

                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.6}} transition={{type:'spring', damping:6, stiffness: 200 }} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:w-15 md:h-15 rounded object-cover' src={CSS} alt="css logo" />
                    <p>CSS</p>
                </motion.div>

                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.6}} transition={{type:'spring', damping:6, stiffness: 200 }} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:w-15 md:h-15 rounded object-cover' src={JS} alt="javascript logo" />
                    <p>JS</p>
                </motion.div>

                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.8}} transition={{type:'spring', damping:6, stiffness: 200 }} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:h-15 rounded object-cover' src={TAILWIND} alt="tailwind logo" />
                    <p>Tailwind</p>
                </motion.div>

                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.6}} transition={{type:'spring', damping:6, stiffness: 200 }} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:h-15 rounded object-cover' src={REACT} alt="react logo" />
                    <p>React Native</p>
                </motion.div>

                <motion.div variants={children} whileHover={{scale:1.1, y:-10}} whileTap={{scale:0.6}} transition={{type:'spring', damping:6, stiffness: 200 }} className='flex flex-col items-center will-change-transform'>
                    <img className='w-10 h-10 md:h-15 rounded object-cover' src={GITHUB} alt="github logo" />
                    <p>GitHub</p>
                </motion.div>

            </div>

        </motion.div>

    )
}

export default Skills
