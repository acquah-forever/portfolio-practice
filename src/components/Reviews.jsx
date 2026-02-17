import React from 'react'
import { motion } from 'motion/react'

const Reviews = ({ photo, name, profession, review }) => {
    return (
        <div className='border mb-3 w-full p-5 rounded-2xl hover:scale-110 transition-all duration-200 ease-in-out'>
            <div className='flex justify-center md:justify-start'>
                <img className='w-15 h-15 rounded-full object-cover loading-lazy' src={photo} alt="image" />
            </div>
            <h1 className='text-xl font-semibold mb-2'>{name}</h1>
            <h1 className='text-m mb-8 underline'>{profession}</h1>
            <p className='mt-3 text-sm'>{review}</p>
        </div>
    )
}

export default Reviews
