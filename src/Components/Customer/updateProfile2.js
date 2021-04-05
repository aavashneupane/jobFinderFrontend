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
        photo: '',
        resume:'',
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
            url: "http://localhost:91/profile2",
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
        var image = this.refs.photo.files[0];
        //var cv = this.refs.resume.files[0];
        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('userbio', this.state.userbio)
        data.append('age', this.state.age)
        data.append('address', this.state.address)
        data.append('phone', this.state.phone)
        data.append('resume', this.state.resume)
        data.append('projects', this.state.projects)
        data.append('experience', this.state.experience)
        data.append('photo', image)
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
                                 <input type="text" value={this.state.firstname} name="firstname"
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
                                    User description :


                                        <input type="text"
                                        value={this.state.userbio}
                                        name="userbio"
                                        onChange={this.changeHandler}
                                    />

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
                                <p>
                                    Photo<input type="file" name="photo" ref="photo" />
                                </p>
                                <p>
                                    Resume<input type="file" name="resume" onChange={this.uploadHandler} />
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