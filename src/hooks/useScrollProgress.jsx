import React, { useState, useEffect } from 'react'


function calculateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight

    return (window.scrollY / totalHeight) * 100
}


const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(calculateScrollProgress)

    useEffect(() => {

        function handleScroll() {
            setScrollProgress(calculateScrollProgress())
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])


    return scrollProgress
}

export default useScrollProgress
