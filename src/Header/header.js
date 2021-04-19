
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
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarmobile" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" >
                                <Nav.Link ><Link className="navbarText" to="/"> Home</Link></Nav.Link>
                               
                                <Nav.Link ><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link ><Link className="navbarText" to="/profile"> Profile</Link></Nav.Link>
                                <Nav.Link ><Link className="navbarText" to="/jobAdd">Add Job</Link></Nav.Link>
                                <Nav.Link ><Link className="navbarText" to="/myListings">My Listings</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="navbarText">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="navbarText">{localStorage.getItem('email')}</li></h6>
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
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>

                                <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/showAllJob"> Show All Job</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/profile2"> Profile</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/myApplied">My Applied</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="navbarText">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="navbarText">{localStorage.getItem('email')}</li></h6>
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
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>


                                <Nav.Link><Link className="navbarText" to="/showAllJob"> Show All Job</Link></Nav.Link>
                                <Nav.Link><Link className="navbarText" to="/showcontactus">Show Messages</Link></Nav.Link>
                                <div className="text-light">
                                    <li className="navbarText">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</li>
                                    <h6><li className="navbarText">{localStorage.getItem('email')}</li></h6>
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
                        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Navbar.Brand>
                        <Navbar.Brand href="/"><Link className="navbarText" to="/">JobFinder <i className="fas fa-briefcase"></i></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link className="navbarText" to="/"> Home</Link></Nav.Link>

                                <Nav.Link><Link className="navbarText" to="/contact">Contact us</Link></Nav.Link>

                                <Button variant="outline-success"><Link className="navbarText" to="/login">Login</Link></Button>
                                <Button variant="outline-success"><Link className="navbarText" to="/register">Register</Link></Button>
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