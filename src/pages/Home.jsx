import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Form from '../components/Form'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <About />
      <Form />
      <Footer />
    </div>
  )
}

export default Home
