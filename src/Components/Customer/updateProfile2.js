import React, { Component } from 'react';
import { Button } from "../../Header/Button";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class updateProfile2 extends Component {

    state = {
        userss: {},
        firstname: '',
        lastname: '',
        age:'',
        address:'',
        phone:'',
        projects:'',
        experience:'',
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
                    userss: response.data,
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    updateProfile = (e) => {
        e.preventDefault();
        axios.put('http://localhost:91/profile/editProfileCustomer', this.state, this.state.config)
            .then((response) => {
                console.log(response)
                alert("update successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <div>
                <p>Update Customers Profile</p>

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
                                            placeholder={this.state.userss.firstname} ></input>
                                        {" "}
                                        <input type="text"
                                            value={this.state.lastname}
                                            name="lastname"
                                            onChange={this.changeHandler}
                                            placeholder={this.state.userss.lastname} />
                                    </p>

                                </p>
                                <p>
                                    Address :


                                        <input type="text"
                                        value={this.state.address}
                                        name="address"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.userss.address} />

                                </p>

                                <p>
                                    Age :


                                        <input type="text"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.userss.age} />

                                </p>

                                <p>
                                    Phone :


                                        <input type="text"
                                        value={this.state.phone}
                                        name="phone"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.userss.phone} />

                                </p>

                                <p>
                                    Projects :
                                    <input type="text"
                                        value={this.state.projects}
                                        name="projects"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.userss.projects} />

                                </p>

                                <p>
                                    Experience :
                                        <input type="text"
                                        value={this.state.experience}
                                        name="experience"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.userss.experience} />

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