import {Code,FileCode,Braces,Palette,BrushCleaning,Sparkle} from 'lucide-react'
const frontend = [
    {
        id:1,
        svg:<Code />,
        name:"React"
    },
    {
        id:2,
        svg:<Palette />,
        name:"Tailwind CSS"
    },
    {
        id:3,
        svg:<FileCode />,
        name:"JavaScript"
    },
    {
        id:4,
        svg:<Braces />,
        name:"HTML"
    },
    {
        id:5,
        svg:<BrushCleaning />,
        name:"CSS"
    },
    {
        id:6,
        svg:<Sparkle />,
        name:"Framer Motion"
    }
]

export function getFrontend(){
    return frontend
}