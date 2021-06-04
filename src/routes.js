import { Home } from './pages/Home.jsx'
import { Templates } from './pages/Template.jsx'
import { Editor } from './pages/Editor.jsx'
import { Publish } from './pages/Publish.jsx'
import { Preview } from './pages/Preview.jsx'

export const routes = [
    {
        path: '/preview/:wapId',
        component: Preview
    },
    {
        path: '/publish/:wapId',
        component: Publish
    },
    {
        path: '/template',
        component: Templates,
    },
    {
        path: '/editor',
        component: Editor,
    },
    {
        path: '/',
        component: Home,
    }
]