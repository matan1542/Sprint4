import { ReactComponent as Logo } from '../Logo.svg';
import { Link, NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header className="">
            <div className="app-header flex space-between align-center">
                <Link to="/"><Logo className="app-logo" /></Link>

                <nav>
                    <NavLink exact to="/"> Home </NavLink>
                    <NavLink to="/template">Template</NavLink>
                    <NavLink to="/editor">Editor</NavLink>
                </nav>
            </div>
        </header>
    )
}

