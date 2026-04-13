import React from 'react'


const Skills = ({ front }) => {

    return (
        <div className='flex'>
            <div>
                <div>{front.svg}</div>
                <div>{front.name}</div>
            </div>
        </div>
    )
}

export default Skills
