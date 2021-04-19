import React, { Component } from 'react';

import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class updateProfile extends Component {

    state = {
        firstname: '',
        lastname: '',
        age: '',
        address: '',
        phone: '',
        company: '',
        foundedin: '',
        photo: '',
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

    async componentDidMount() {
        await axios({
            method: "get",
            url: "http://localhost:91/profile1",
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
                    company: response.data.company,
                    foundedin: response.data.foundedin
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
        data.append('firstname', this.state.firstname)
        data.append('lastname', this.state.lastname)
        data.append('age', this.state.age)
        data.append('address', this.state.address)
        data.append('phone', this.state.phone)
        data.append('company', this.state.company)
        data.append('foundedin', this.state.foundedin)


        data.append('photo', image)

        axios({
            method: 'put',
            url: 'http://localhost:91/profile/editProfileCompany/' + this.state.id,
            data: data,
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            //axios.put('http://localhost:91/profile/editProfileCompany'+this.state, this.state.config)
            .then((response) => {
                console.log(response)
                alert("profile update successfull")
                window.location.href = '/profile';
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
                <p>Update Company Profile</p>

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
                                    Company :
                                    <input type="text"
                                        value={this.state.company}
                                        name="company"
                                        onChange={this.changeHandler}
                                    />

                                </p>

                                <p>
                                    Founded in :
                                        <input type="text"
                                        value={this.state.foundedin}
                                        name="foundedin"
                                        onChange={this.changeHandler}
                                    />

                                </p>
                                <p>
                                    
                                Photo<input type="file" name="photo" ref="photo"  onChange={this.fileHandler} />
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
export default updateProfile;