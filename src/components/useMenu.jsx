import React,{ useState } from 'react'

const useMenu = (initialValue = false) => {
    let [state, setState] = useState(initialValue)

    function toggleMenu (){
        setState(prev => !prev)
    }

    return [state,toggleMenu]
}

export default useMenu
