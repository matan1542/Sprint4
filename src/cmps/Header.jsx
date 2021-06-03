import { ReactComponent as Logo } from '../Logo.svg';
import { Link, NavLink,withRouter } from 'react-router-dom'
import { Component } from 'react';

 class _Header extends Component {
     state={
         isPublish:false
     }
     componentDidMount() {
            const str = this.props.location.pathname;
            if(str.indexOf('publish') !== -1){
                this.setState({isPublish:true})
            }
    
     }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const str = this.props.location.pathname;
            if(str.indexOf('publish') !== -1){
                this.setState({isPublish:true})
            }else{
                this.setState({isPublish:false})
            }
        }
    }
     render(){
         if(this.state.isPublish) return <div></div>
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
    
}

export const Header = withRouter(_Header)

