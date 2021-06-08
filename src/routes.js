import { Home } from './pages/Home.jsx'
import { Templates } from './pages/Template.jsx'
import { Editor } from './pages/Editor.jsx'
import { Publish } from './pages/Publish.jsx'

export const routes = [
    {
        path: '/preview/:wapId',
        component: Publish
    },
    {
        path: '/publish/:wapId',
        component: Publish
    },
    {
        path: '/editor/:roomId?',
        component: Editor,
    },
    {
        path: '/template',
        component: Templates,
    },
   
    {
        path: '/',
        component: Home,
    }
]