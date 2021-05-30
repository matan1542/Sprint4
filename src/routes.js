import { Home } from './pages/Home.jsx'
import { Templates } from './pages/Template.jsx'
import { Editor } from './pages/Editor.jsx'

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Templates',
        component: Templates,
    },
    {
        path: '/Editor',
        component: Editor,
    },
    // {
    //     path: '/:wapId',
    //     component:
    // }
]