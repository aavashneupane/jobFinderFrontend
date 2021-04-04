import { Button } from "../Header/Button";
import { Component } from "react";
import { Card } from 'react-bootstrap';
const axios = require('axios').default;

class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        age: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        photo: '',
        role: ''

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    sendUserInfo = (e) => {
        e.preventDefault()
        const data = new FormData() // new line
        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('age', this.state.age)
        data.append('address', this.state.address)
        data.append('phone', this.state.phone)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('photo', this.state.photo)
        data.append('role', this.state.role)

        
        
        axios({
            method: 'post',
            url: 'http://localhost:91/user/add',
            data: data,
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
          })
        //axios.post("http://localhost:91/user/add", data)
            .then(response => {
                console.log(response);
                //console.log(response.data);
                alert("User has been registered successfully")
                window.location.href = '/login';
            })
            .catch(err => {
                console.log(err.response);
                alert("Registration unsuccessfull")
        //        window.location.href = '/register';
            })

    };


    render() {

        return (
            <div>
                <p></p>
                <Card body>
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

                        <p>
                            <input type="file" name="photo" onChange={this.fileHandler} />
                        </p>

                        <Button onClick={this.sendUserInfo}>Submit</Button>

                    </form>


                </Card>
            </div>

        )
    }
}
export default Register;