import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { getFrontend } from '../data/frontend'
import{getLearning} from '../data/learning'


const Home = () => {
  const frontend = getFrontend()
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='mx-20'>
        <About />
      </div>
      <div>
        {frontend.map((front) => (<Skills
        front ={front} key ={front.id}
        />))}
        
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
