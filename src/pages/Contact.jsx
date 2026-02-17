import React from 'react'
import { motion } from 'motion/react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <motion.div initial={{opacity:0, x:-60}} animate={{opacity: 1, x:0}} transition={{duration:0.8, ease:'easeOut'}}>
      <Form />
    </motion.div>
  )
}

export default Contact
