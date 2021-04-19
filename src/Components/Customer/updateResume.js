import React, { Component } from 'react';

import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class updateResume extends Component {

    state = {
        resume: '',
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
                    resume: response.data.resume,

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

        var cv = this.refs.resume.files[0];

        data.append('resume', cv)
        axios({
            method: 'put',
            url: 'http://localhost:91/profile/editResume/' + this.state.id,
            data: data,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })

            .then((response) => {
                console.log(response)
                alert("Resume update successfull")
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
                <p>Update Resume</p>

                <Card body>
                    <div class="card-text-center">
                        <div class="card-header">
                            <p>
                                Resume<input type="file" name="resume" ref="resume" onChange={this.uploadHandler} />

                            </p>

                        </div>
                        <div class="card-body">


                            <form>






                                <button onClick={this.updateProfile} class="btn btn-warning">Update Resume</button>
                            </form>





                        </div>
                    </div>
                </Card>
                <p></p>
            </div>
        )
    }

}
export default updateResume;