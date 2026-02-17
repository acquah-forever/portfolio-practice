import React, { useState } from 'react'
import useToggle from '../components/useToggle'

const Portfolio = () => {

  let [activeIndex, toggle] = useToggle()

  return (
    <div className='mt-10'>
      <button className='bg-sky-400 rounded-xl p-1' onClick={()=>toggle(1)}>
        {activeIndex === 1 ? <h1>Hide</h1> : <h1>Show</h1>}
      </button>
      {activeIndex === 1 && (
        <h1>You Suck</h1>
      )}
      <br /><br />

      <button className='bg-sky-400 rounded-xl p-1' onClick={()=>toggle(2)}>
        {activeIndex === 2 ? <h1>Hide</h1> : <h1>Show</h1>}
      </button>
      {activeIndex === 2 && (
        <h1>You Suck</h1>
      )}

    </div>
  )
}

export default Portfolio
