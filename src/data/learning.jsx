import{ScrollText,Webhook,Funnel} from 'lucide-react'
const learning = [
    {
        id:1,
        svg:ScrollText,
        name:"TypeScript"
    },
    {
        id:2,
        svg:Webhook,
        name:"REST APIs"
    },
    {
        id:3,
        svg:Funnel,
        name:"Node JS"
    }
]

export function getLearning(){
    return learning
}