import { Button } from "../Header/Button";
import { Redirect } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';

const { Component } = require("react");
const axios = require('axios').default;



class Login extends Component {
    state = {
        email: '',
        password: '',
        loginChk: false
    };
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:91/user/login", this.state)
            .then(response => {
                this.setState({
                    loginChk: true
                })
                console.log("success");
                alert("Login Successfull")
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('role', response.data.role)
                localStorage.setItem('firstname', response.data.firstName)
                localStorage.setItem('lastname', response.data.lastName)
                window.location.href = '/showAllJob';
                //console.log(response.data);
            })
            .catch(err => {
                console.log(err.response);
                alert("Login unuccessfull. Try again")
                window.location.href = '/login';
            })



    };

    render() {
        if (this.state.loginChk === true) {
            return <Redirect to='/showAllJob' />
        }
        if (localStorage.getItem('token')) {
            return <Redirect to='/showAllJob' />
        }
        return (
           

<div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div className="login-form">

                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} name="email"
                                    onChange={this.inputHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} name="password"
                    onChange={this.inputHandler} />
                            </div>

                            

                         <Button variant="primary" type="submit" onClick={this.submitLogin}>
                        Login
                          </Button>


                        </form>
                    </div>
                </div>
            </div>

            </div>
        )
    }

}

export default Login;