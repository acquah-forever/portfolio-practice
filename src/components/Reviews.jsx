import React from 'react'
import { motion } from 'motion/react'

const Reviews = ({ photo, name, profession, review }) => {


    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.17, ease: "easeOut", duration: 0.5 } }

    }
    let children = {
        hidden: { opacity: 0, y:-70 },
        visible: { opacity: 1, y: 0 }
    }



    return (
        <motion.div variants={parent} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount:0.3 }} className='border mb-3 w-full p-5 rounded-xl ease-in-out'>
            <motion.div variants={children} className='flex justify-center md:justify-start'>
                <img className='w-15 h-15 rounded-full object-cover loading-lazy' src={photo} alt="image" />
            </motion.div>
            <motion.h1 variants={children} className='text-xl font-semibold mb-2'>{name}</motion.h1>
            <motion.h1 variants={children} className='text-m mb-8 underline'>{profession}</motion.h1>
            <motion.p variants={children} className='mt-3 text-lg'>{review}</motion.p>
        </motion.div>
    )
}

export default Reviews
