import React,{useState} from 'react'
import { motion } from "motion/react"
import {getAbout} from '../data/about'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const About = () => {
    const [activeTab,setActiveTab] = useState('About.jsx')

    const data2 = getAbout()

    let parent = {
        hidden: { opacity: 0, y: -90 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1, ease: "easeOut", duration: 1.2 } }

    }
    let children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} id='about' className=' p-10 mb-20 space-y-7 flex flex-col justify-center items-center'>
            <motion.h1 variants={children} className=' text-4xl font-bold'>About <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Me</span></motion.h1>
            <motion.h1 variants={children} className='text-md text-slate-600 dark:text-slate-300 text-left'>
                I’m Kojo, a frontend engineer focused on crafting fast, accessible, and well-structured web interfaces. I work mainly with React and JavaScript, and I’m currently pushing further into full-web development to broaden my impact.
                I’m particularly interested in building tools that improve workflows of my current projects. When I’m away from the keyboard, I’m usually exploring open-source ecosystems, refining my perspective on developer experience, or relaxing with travelling.
            </motion.h1>
            <div className='flex space-x-3 justify-center'>
                <div>
                    <h1 className='text-center text-sky-500 font-bold text-3xl'>5+</h1>
                    <h1 className='text-md'>Projects Built</h1>
                </div>
                <div>
                    <h1 className='text-center text-sky-500 font-bold text-3xl'>1+</h1>
                    <h1 className='text-md'>Years Learning</h1>
                </div>
                <div>
                    <h1 className='text-center text-sky-500 font-bold text-3xl'>∞</h1>
                    <h1 className='text-md'>Coding</h1>
                </div>
            </div>

            <div className="w-full max-w-lg aspect-4/3 rounded-2xl border  bg-slate-300 mx-auto md:mx-0">
                <div className='flex items-center mt-3'>
                    <div className='px-3 flex space-x-1'>
                        <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                        <div className='w-3 h-3 bg-amber-300 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    </div>
                </div>
                <div className='border-t mt-2 border-slate-400'></div>
                <button className={`px- mx-1 mt-1 cursor-pointer text-white p-3  rounded-t-xl ${activeTab === 'About.jsx' ? "bg-sky-500" : "bg-sky-800"}`}onClick={() => setActiveTab('About')}>About</button>
                <button className={`px- mx-1 mt-1 cursor-pointer text-white p-3  rounded-t-xl ${activeTab === 'Comment.jsx' ? "bg-sky-500" : "bg-sky-800"}`}onClick={() => setActiveTab('Comment')}>Comment</button>
                <div className='mt-1'>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>{data2[activeTab]}</SyntaxHighlighter>
                </div>

            </div>

        </motion.div>
    )
}

export default About
