import React from 'react'
import { motion } from 'motion/react'
import Profile from '../assets/bus.jpeg'


const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className='relative md:min-h-screen bg-[url("https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_1280.jpg")] bg-cover bg-center bg-fixed bg-no-repeat'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='relative z-50'>
               
            </div>
        </motion.div>
    )
}

export default Hero
