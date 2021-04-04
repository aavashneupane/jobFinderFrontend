// import { MenuItems } from "./MenuItems";
import './header.css';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Company') {
            var menu =
                <div>
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">Job Finder<i className="fab fa-react"></i></h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-links"><Link to="/"> Home</Link></li>
                            <li className="nav-links"><Link to="/aboutus"> About us</Link></li>




                            <li className="nav-links"><Link to="/profile"> Profile</Link></li>
                            <li className="nav-links"><Link to="/jobAdd"> Job Add</Link></li>
                            <li className="nav-links"><Link to="/myListings">My Listings</Link></li>

                            <div className="text-dark">
                                <li className="">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                <h6><li className="nav-below">{localStorage.getItem('email')}</li></h6>
                            </div>

                            <Button onClick={this.logout}>Log out</Button>



                        </ul>





                    </nav>
                </div>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Customer') {
            var menu =
                <div>

                    <nav className="NavbarItems">
                        <p></p>
                        <h1 className="navbar-logo">Job Finder<i className="fab fa-react"></i></h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-links"><Link to="/"> Home</Link></li>
                            <li className="nav-links"><Link to="/aboutus"> About us</Link></li>
                            <li className="nav-links"><Link to="/showAllJob"> Show All Job</Link></li>



                            <li className="nav-links"><Link to="/profile2"> Profile</Link></li>


                            <li className="nav-links"><Link to="/myApplied">My Applied</Link></li>
                            <div className="text-dark">
                                <li className="">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                <h6><li className="nav-below">{localStorage.getItem('email')}</li></h6>
                            </div>
                            <Button onClick={this.logout}>Log out</Button>





                        </ul>





                    </nav>
                </div>
        }
        else {
            var menu =
                <div>
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">Job Finder<i className="fab fa-react"></i></h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                            <li className="nav-links"><Link to="/"> Home</Link></li>
                            <li className="nav-links"><Link to="/aboutus"> About us</Link></li>
                            <Button><Link to="/login"> Login</Link></Button>
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
                </div>
        }

        return (
            <div>
                {menu}

            </div>
        )
    }

}

export default Header;