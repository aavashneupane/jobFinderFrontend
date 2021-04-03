import React, { Component } from 'react';
import { Button } from "../../Header/Button";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class updateProfile2 extends Component {

    state = {
        firstname: '',
        lastname: '',
        age: '',
        address: '',
        phone: '',
        projects: '',
        experience: '',
        foundedin: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    async componentDidMount() {
        await axios({
            method: "get",
            url: "http://localhost:91/profile2",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    age: response.data.age,
                    address: response.data.address,
                    phone: response.data.phone,
                    projects: response.data.projects,
                    experience: response.data.experience
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    }


    updateProfile = (e) => {
        e.preventDefault();
        // alert(this.state.id)

        axios({
            method: 'put',
            url: 'http://localhost:91/profile/editProfileCustomer/' + this.state.id,
            data: this.state,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })
            
            .then((response) => {
                console.log(response)
                alert("profile update successfull")
                window.location.href = '/profile2';
            })
            .catch((err) => {
                console.log(err.response)
                console.log("no update")
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <div>
                <p>Update Customer Profile</p>

                <Card body>
                    <div class="card-text-center">
                        <div class="card-header"></div>
                        <div class="card-body">


                            <form>
                                <p>
                                    <p>
                                        Name :


                                        <input type="text"
                                            value={this.state.firstname}
                                            name="firstname"
                                            onChange={this.changeHandler}
                                        ></input>
                                        {" "}
                                        <input type="text"
                                            value={this.state.lastname}
                                            name="lastname"
                                            onChange={this.changeHandler}
                                        />
                                    </p>

                                </p>
                                <p>
                                    Address :


                                        <input type="text"
                                        value={this.state.address}
                                        name="address"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <p>
                                    Age :


                                        <input type="text"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <p>
                                    Phone :


                                        <input type="text"
                                        value={this.state.phone}
                                        name="phone"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <p>
                                    Projects :
                                    <input type="text"
                                        value={this.state.projects}
                                        name="projects"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <p>
                                    Experience :
                                        <input type="text"
                                        value={this.state.experience}
                                        name="experience"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <button onClick={this.updateProfile} class="btn btn-warning">Update Profile</button>
                            </form>





                        </div>
                    </div>
                </Card>
                <p></p>
            </div>
        )
    }

}
export default updateProfile2;