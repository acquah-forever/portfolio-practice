import React from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = () => {
    
    let schema = yup.object().shape({
        firstname: yup.string().required('Your first name is required.'),
        lastname: yup.string().required('Your last name is required.'),
        email: yup.string().email().required('Your email is required.'),
        mobile: yup.string().min(10,'Phone number must have at least 10 digits').required(),
        details: yup.string().required('Message is required.')
    })


    let { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    function onSubmit(data) {
        console.log(data)
         

    }

    return (
        <div className='flex flex-col items-center justify-center space-y-3 mt-10'>
            <h1 className='text-xl md:text-2xl'>Reach Out To Me. Lets Talk 🙂</h1>
            <form className="flex flex-col space-y-1 w-65 sm:w-80 md:w-90 lg:w-100 p-4 dark:border shadow-2xl rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                <label className='pl-2 text-sm'>First Name</label>
                <p className='text-red-500 dark:text-red-400 text-sm pl-2'>{errors.firstname?.message}</p>
                <input className='mb-4 p-2 dark:outline-white outline-sky-400' type="text" placeholder='Enter your First Name' {...register('firstname')} />

                <label className='pl-2 text-sm'>Last Name</label>
                <p className='text-red-500 dark:text-red-400 text-sm pl-2'>{errors.lastname?.message}</p>
                <input className='mb-4 p-2 dark:outline-white outline-sky-400' type="text" placeholder='Enter your Last Name' {...register('lastname')} />

                <label className='pl-2 text-sm'>Email</label>
                <p className='text-red-500 dark:text-red-400 text-sm pl-2'>{errors.email?.message}</p>
                <input className='mb-4 p-2 dark:outline-white outline-sky-400' type="text" placeholder='Enter your Email' {...register('email')} />

                <label className='pl-2 text-sm'>Phone Number</label>
                <p className='text-red-500 dark:text-red-400 text-sm pl-2'>{errors.mobile?.message}</p>
                <input className='mb-4 p-2 dark:outline-white outline-sky-400' type="tel" placeholder='Enter your Phone Number' {...register('mobile')} />

                <label className='pl-2 text-sm'>Message</label>
                <p className='text-red-500 dark:text-red-400 text-sm pl-2'>{errors.details?.message}</p>
                <input className='mb-4 p-2 h-17 dark:outline-white outline-sky-400' type="text" placeholder='Enter Message' {...register('details')} />
                <motion.div whileHover={{scale:1.2, y:-2}} whileTap={{scale:1, y:-15}} transition={{type:'spring', stiffness:400, damping:10}} className='flex justify-center'><input className='bg-emerald-400 cursor-pointer w-30 px-7 py-3 rounded text-center' type="submit" /></motion.div>
            </form>
        </div>

    )
}

export default Form
