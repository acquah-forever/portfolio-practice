import React, { useState, useEffect } from 'react'

const useScrollProgress = (initialValue = calculateScrollProgress ) => {
    const [state = scrollProgress, setState] = useState(initialValue)

    function calculateScrollProgress() {
        const totalHeight = document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        
        return(window.scrollY/totalHeight) * 100
    }

    useEffect(() => {

        function handleScroll() {
            setState(calculateScrollProgress())
        } 

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll )

    }, [])


    return [scrollProgress]
}

export default useScrollProgress
