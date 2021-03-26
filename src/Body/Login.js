import { Button } from "../Header/Button";
import { Redirect } from 'react-router-dom';
import { Card } from 'react-bootstrap';
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
                <p></p>
                <Card body>
                    <h2>Login</h2>

                    <form>

                        <p>Email<input type="text" value={this.state.email} name="email"
                            onChange={this.inputHandler} /></p>

                        <p>Password<input type="password" value={this.state.password} name="password"
                            onChange={this.inputHandler} /></p>

                        <Button onClick={this.submitLogin}>Submit</Button>

                    </form>

                </Card>

            </div>



        )
    }

}

export default Login;