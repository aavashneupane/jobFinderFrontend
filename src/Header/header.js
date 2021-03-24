import { MenuItems } from "./MenuItems";
import './header.css';
import {Button} from "./Button";
import { Link } from 'react-router-dom';
const { Component } = require("react");


class Header extends Component {
state = {
    clicked: false
}
handleClick = () =>{
    this.setState({clicked: !this.state.clicked});
}

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Job Finder<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}


                </ul>

<Button>
    Sign Up
</Button>
                {/* <Link to="/register"> Register</Link>
                <Link to="/login"> Login</Link>
                <Link to="/jobAdd"> Job Add</Link>
                <Link to="/updateJob"> Update Job</Link>
                <Link to="/showAllJob"> Show All Job</Link> */}
            </nav>
        )
    }

}

export default Header;