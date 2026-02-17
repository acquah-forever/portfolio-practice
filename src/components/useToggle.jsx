import React, { useState } from 'react'

const useToggle = (initialValue = false) => {
    let [state, setState] = useState(initialValue)

    function toggle(index) {
        setState(prev => (prev === index ? false : index))
    }

    return [state, toggle]
}

export default useToggle
