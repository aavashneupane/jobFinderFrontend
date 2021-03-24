import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
const { Component } = require("react");


class Header extends Component {

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fa fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
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


                <Link to="/register"> Register</Link>
                <Link to="/login"> Login</Link>
                <Link to="/jobAdd"> Job Add</Link>
                <Link to="/updateJob"> Update Job</Link>
                <Link to="/showAllJob"> Show All Job</Link>
            </nav>
        )
    }

}

export default Header;