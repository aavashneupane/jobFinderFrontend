// import { MenuItems } from "./MenuItems";
import './header.css';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
const { Component } = require("react");


class Header extends Component {
    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Job Finder<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-links"><Link to="/"> Home</Link></li>
                    <li className="nav-links"><Link to="/aboutus"> About us</Link></li>
                   <li className="nav-links"><Link to="/showAllJob"> Show All Job</Link></li>



                    <li className="nav-links"><Link to="/profile"> Profile</Link></li>
                    <li className="nav-links"><Link to="/jobAdd"> Job Add</Link></li>
                     <Button onClick={this.logout}>Log out</Button>
                    <div>
                        {
                            isLoggedIn
                                ? (
                                    <li className="nav-links"><Link to="/login"> Logout</Link></li>                
                                    
                                    
                                )
                                : (
                                    <li className="nav-links"><Link to="/login"> Login</Link></li>                
                                        
                                    
                                )
                        }
                    </div>

                    {/* <li class="nav-links"><Link to="/login"> Login</Link></li> */}
                    {/* {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })} */}


                </ul>

                <Link to="/register">
                    <Button>
                    Sign Up
                    </Button>
                    </Link>
                <div>
                    {/* <Link to="/register"></Link> */}
                    {/* <a href="#" onClick={this.logout()}>LOGOUT</a> */}
                </div>



            </nav>
        )
    }

}

export default Header;