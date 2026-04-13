import{Github,GitFork,Codesandbox,Container} from 'lucide-react'
const tools = [
    {
        id:1,
        svg:Github,
        name:"GitHub"
    },
    {
        id:2,
        svg:GitFork,
        name:"VS Code"
    },
    {
        id:3,
        svg:Codesandbox,
        name:"Vite"
    },
    {
        id:4,
        svg:Container,
        name:"npm"
    },
]

export function getTools(){
    return tools
}