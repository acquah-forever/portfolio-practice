import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(calculateScrollProgress)

    function calculateScrollProgress() {
        const totalHeight = document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        
        return(window.scrollY/totalHeight) * 100
    }

    useEffect(() => {

        function handleScroll() {
            setScrollProgress(calculateScrollProgress())
        } 

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll )

    }, [])


    return [scrollProgress]
}

export default useScrollProgress
