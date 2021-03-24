import { Component } from "react";
const axios = require('axios').default;

class Register extends Component {
    state = {
        firstname:'',
        lastname:'',
        age:'',
        address:'',
        phone:'',
        email:'',
        password: '',
        role: ''

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendUserInfo = (e) => {
        //e.preventDefault()
        
        axios.post("http://localhost:91/user/add", this.state)
            .then(response => {
                console.log(response);
                //console.log(response.data);
            })

    };

    render() {

        return (
            <div>

                <h2>Register</h2>

                <form>
                    <p>Firstname<input type="text" value={this.state.firstname} name="firstname"
                        onChange={this.inputHandler} /></p>

                    <p>lastname<input type="text" value={this.state.lastname} name="lastname"
                        onChange={this.inputHandler} /></p>

                    <p>Age<input type="text" value={this.state.age} name="age"
                        onChange={this.inputHandler} /></p>

                    <p>Address<input type="text" value={this.state.country} name="address"
                        onChange={this.inputHandler} /></p>

                    <p>Phone<input type="text" value={this.state.phone} name="phone"
                        onChange={this.inputHandler} /></p>

                    <p>Email<input type="text" value={this.state.email} name="email"
                        onChange={this.inputHandler} /></p>

                    <p>Password<input type="password" value={this.state.password} name="password"
                        onChange={this.inputHandler} /></p>

                    <p>Role<input type="role" value={this.state.Role} name="role"
                        onChange={this.inputHandler} /></p>

                    <button onClick={this.sendUserInfo}>Submit</button>

                </form>



            </div>

        )
    }
}
export default Register;