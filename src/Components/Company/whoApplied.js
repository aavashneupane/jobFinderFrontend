import React, { Component, useState } from 'react';
import { Container, Row, Col, Badge, Button, Alert } from 'react-bootstrap';
import { Route, Link, useParams } from 'react-router-dom';

import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;




class whoApplied extends Component {

    state = {

        applied: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        console.log("this is id: " + this.state.id)
        axios({
            method: 'get',
            url: 'http://localhost:91/job/showWhoApplied/' + this.state.id,
            // data: this.state.id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            // axios.get('http://localhost:91/job/showWhoApplied/', this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    applied: response.data
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    };

    confirmMethod = (id) => {
        //  e.preventDefault()

        axios({
            method: 'put',
            url: 'http://localhost:91/job/approveJob/' + id,
            data: { confirmStatus: "Confirmed" },
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },

        })
            // .put("http://localhost:91/job/approve/" + id, this.state.config)
            .then(response => {
                console.log("to update" + id);
                alert("Job has been confirmed")
                window.location.reload()
            })
            .catch(err => {
                console.log(err.response);
                alert("Error confirming job")

            })


    };

    denyMethod = (id) => {
        //   e.preventDefault();
        axios({
            method: 'put',
            url: 'http://localhost:91/job/approveJob/' + id,
            data: { confirmStatus: "denied" },
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => {
                console.log(response);
                alert("Job has been denied")
                window.location.reload()
            })
            .catch(err => {
                console.log(err.response);
                alert("Error denying job")
            })


    };



    render() {

        return (
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.applied.map((users) => {
                                return (<div>
                                    <div class="py-5 service-22">
                                        <div class="container">

                                            <div class="row wrap-service-22">

                                                <div class="col-lg-6">
                                                    <img src={`http://localhost:91/${users.userid.photo}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "400px" }} />
                                                </div>

                                                <div class="col-lg-6 mt-4 mt-md-0">
                                                    <div class="text-box">
                                                        <small class="text-info font-weight-medium">Applied for: {users.jobid.jobtitle} </small>
                                                        <h4 class="font-weight-light mt-2 mb-4">Applicant name: <span class="text-megna">{users.userid.firstname} {users.userid.lastname}</span></h4>
                                                        <h6 class="font-weight-light">Applicant bio: <span class="text-megna">{users.userid.userbio}</span></h6>
                                                        <p><h6 class="font-weight-light">Resume Link:<a href={`http://localhost:91/${users.userid.resume}`} target="_blank">Click to view the resume</a></h6></p>
                                                        <h6 class="font-weight-light">Experience: <span class="text-megna">{users.userid.experience}</span></h6>
                                                        <h6 class="font-weight-light">Projects: <span class="text-megna">{users.userid.projects}</span></h6>
                                                        <h6 class="font-weight-light">Email : <span class="text-megna">{users.userid.email}</span></h6>
                                                        <h6 class="font-weight-light">PhoneNumber: <span class="text-megna">{users.userid.phone}</span></h6>

                                                        <p>Current status for this applicant: {users.confirmStatus}</p>
                                                        {
                                                            users.confirmStatus === "Confirmed"
                                                                ? (
                                                                    <div>

                                                                        <Button disabled={true} onClick={this.confirmMethod.bind(this, users._id)} variant="success" >Confirm</Button> &nbsp;
                                                                        <Button variant="danger" onClick={this.denyMethod.bind(this, users._id)} >Deny</Button>

                                                                    </div>
                                                                )
                                                                : users.confirmStatus === "denied"
                                                                    ? (
                                                                        <div>

                                                                            <Button variant="success" onClick={this.confirmMethod.bind(this, users._id)}>Confirm</Button> &nbsp;
                                                                            <Button disabled={true} variant="danger" onClick={this.denyMethod.bind(this, users._id)} >Deny</Button>

                                                                        </div>
                                                                    )

                                                                    : (
                                                                        <div>

                                                                            <Button variant="success" onClick={this.confirmMethod.bind(this, users._id)}>Confirm</Button>&nbsp;
                                                                            <Button variant="danger" onClick={this.denyMethod.bind(this, users._id)}>Deny</Button>

                                                                        </div>
                                                                    )
                                                        }



                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>
                    <Col></Col>
                </Row>
            </Container >
        )
    }

}

export default whoApplied;