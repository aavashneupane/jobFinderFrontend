// import { MenuItems } from "./MenuItems";
import './header.css';
//import { Button } from "./Button";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    
                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="#home">JobFinder <i className="fab fa-instagram"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/"> Home</Link></Nav.Link>
                                <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link><Link to="/profile"> Profile</Link></Nav.Link>
                                <Nav.Link><Link to="/jobAdd">Add Job</Link></Nav.Link>
                                <Nav.Link><Link to="/myListings">My Listings</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="nav-below">{localStorage.getItem('email')}</li></h6>
                                </div>
                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </div>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Customer') {
            var menu =
                <div>

                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="#home">JobFinder <i className="fab fa-instagram"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/"> Home</Link></Nav.Link>
                                <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link><Link to="/showAllJob"> Show All Job</Link></Nav.Link>
                                <Nav.Link><Link to="/profile2"> Profile</Link></Nav.Link>
                                <Nav.Link><Link to="/myApplied">My Applied</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="nav-below">{localStorage.getItem('email')}</li></h6>
                                </div>
                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </div>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Admin') {
            var menu =
                <div>

                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="#home">JobFinder <i className="fab fa-instagram"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/"> Home</Link></Nav.Link>
                                <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link><Link to="/showAllJob"> Show All Job</Link></Nav.Link>
                                <Nav.Link><Link to="/showcontactus">Show Messages</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="nav-below">{localStorage.getItem('email')}</li></h6>
                                </div>
                                <Button variant="outline-success" onClick={this.logout}>Logout</Button>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
        } else {
            var menu =
                <div>
                    <Navbar bg="light" expand="lg" bg="light" class="navbar">
                        <Navbar.Brand href="#home">JobFinder <i className="fab fa-instagram"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to="/"> Home</Link></Nav.Link>
                                <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact us</Link></Nav.Link>

                                <Button variant="outline-success"><Link to="/login">Login</Link></Button>
                                <Button variant="outline-success"><Link to="/register">Register</Link></Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
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