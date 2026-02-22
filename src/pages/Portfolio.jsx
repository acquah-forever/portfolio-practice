import React from 'react'
import Projects from '../components/Projects'
import Landing from '../assets/landing page.jpeg'
import Landing1 from '../assets/landing page1.jpeg'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/js.png'


const Portfolio = () => {

  let data = [
    {
      id: 1,
      photo: Landing,
      title: 'LANDING PAGE',
      description: 'Exhibiting my skills in React JS, Tailwind and JavaScript',
      js: javascript,
      tail: tailwind,
      react: react
    },
    {
      id: 2,
      photo: Landing1,
      title: 'AI AUTOMATION PAGE',
      description: 'Exhibiting my skills in Recat JS, Tailwind and Javascript',
      js: javascript,
      tail: tailwind,
      react: react
    },
    {
      id: 3,
      photo: Landing1,
      title: 'AI AUTOMATION PAGE',
      description: 'Exhibiting my skills in Recat JS, Tailwind and Javascript',
      js: javascript,
      tail: tailwind,
      react: react
    },
    {
      id: 4,
      photo: Landing1,
      title: 'AI AUTOMATION PAGE',
      description: 'Exhibiting my skills in Recat JS, Tailwind and Javascript',
      js: javascript,
      tail: tailwind,
      react: react
    }
  ]


  return (
    <div className='shadow-xl p-10 gap-15 lg:gap-5 grid grid-cols-1 justify-items-center lg:grid-cols-3'>
      {data.map((e) => (<Projects
        key={e.id}
        photo={e.photo}
        title={e.title}
        description={e.description}
        js={e.js}
        tail={e.tail}
        react={e.react}
      />))}
    </div>
  )
}

export default Portfolio
