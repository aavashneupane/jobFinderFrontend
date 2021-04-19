import React, { Component } from 'react';

import { Card,Button } from "react-bootstrap";
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
        photo: '',
        resume: '',
        userbio: '',
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
    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    uploadHandler = (e) => {
        this.setState({
            resume: e.target.files[0]
        })
    }
    async componentDidMount() {
        await axios({
            method: "get",
            url: "http://localhost:91/profile",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    userbio: response.data.userbio,
                    age: response.data.age,
                    address: response.data.address,
                    phone: response.data.phone,
                    photo: response.data.photo,
                    resume: response.data.resume,
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
        const data = new FormData() // new line
        //  var image = this.refs.photo.files[0];
        //   var cv = this.refs.photo.files[0];
        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('userbio', this.state.userbio)
        data.append('age', this.state.age)
        data.append('address', this.state.address)
        data.append('phone', this.state.phone)
        data.append('resume', this.state.resume)
        data.append('projects', this.state.projects)
        data.append('experience', this.state.experience)
        //   data.append('photo', image)
        //     data.append('resume', cv)
        axios({
            method: 'put',
            url: 'http://localhost:91/profile/editProfileCustomer/' + this.state.id,
            data: data,

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
            <div className="profile-wrapper-job">
                <div className="profile-inner-job">
                    <div className="profile-form">
                        <div>
                            <div className="profile-title">
                                Update Profile
                            </div>
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={this.state.firstname} name="firstname" className="form-control"
                                        onChange={this.changeHandler}
                                    ></input>
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.lastname} name="lastname" className="form-control"
                                        onChange={this.changeHandler}
                                    ></input>
                                </div>

                                <div className="form-group">
                                    <label>User Description</label>
                                    <input type="text"
                                        value={this.state.userbio}
                                        className="form-control"
                                        name="userbio"
                                        onChange={this.changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.state.address}
                                        name="address"
                                        onChange={this.changeHandler}></input>
                                </div>

                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.state.phone}
                                        name="phone"
                                        onChange={this.changeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Projects</label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.state.projects}
                                        name="projects"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Experience</label>
                                    <input type="text"
                                        value={this.state.experience}
                                        name="experience"
                                        className="form-control"
                                        onChange={this.changeHandler}
                                    />

                                </div>

                                <p>
                                    <Button variant="danger" onClick={this.updateProfile}>Update Profile</Button>

                                </p>




                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default updateProfile2;