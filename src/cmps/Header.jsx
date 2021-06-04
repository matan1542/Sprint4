import { ReactComponent as Logo } from '../Logo.svg';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Component } from 'react';

class _Header extends Component {
    state = {
        isPublish: false
    }
    componentDidMount() {
        const str = this.props.location.pathname;
        if (str.indexOf('publish') !== -1) {
            this.setState({ isPublish: true })
        }

    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const str = this.props.location.pathname;
            if (str.indexOf('publish') !== -1) {
                this.setState({ isPublish: true })
            } else {
                this.setState({ isPublish: false })
            }
        }
    }
    render() {
        if (this.state.isPublish) return <div></div>
        // 
        return (
            <header className="app-header align-center"> 
                    <Link to="/"><Logo className="app-logo" /></Link>

                    {/* <nav>
                        <NavLink exact to="/"> Home </NavLink>
                        <NavLink to="/template">Templates</NavLink>
                        <NavLink to="/editor">Editor</NavLink>
                    </nav> */}
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul class="menu">
                        <li><NavLink exact to="/"> Home </NavLink></li>
                        <li><NavLink to="/template">Templates</NavLink></li>
                        <li><NavLink to="/editor">Editor</NavLink></li>
                    </ul>                    
            </header>
        )
    }

}

export const Header = withRouter(_Header)

