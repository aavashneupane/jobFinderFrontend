import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link, useParams } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;




class whoApplied extends Component {

    state = {
        confirmStatus: '',
        applied: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
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

    confirmMethod = (e) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: 'http://localhost:91/job/approveJob',
            data: "Confirmed",
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => {
                console.log(response);
                alert("Job has been confirmed")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error confirming job")
            })


    };

    denyMethod = (e) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: 'http://localhost:91/job/approveJob',
            data: "denied",
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => {
                console.log(response);
                alert("Job has been denied")
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
                        <p>Applicants that applied for this job</p>

                        <Card body>
                            <div class="card-text-center">
                                <div class="card-header"></div>
                                <div class="card-body">

                                    {this.state.applied.map((users) => {
                                        return (
                                            <div>
                                                <Card body>
                                                    <div class="card-text-center">
                                                        <div class="card-header">
                                                            <h5 class="card-title">{users.userid.firstname} {users.userid.lastname}</h5>

                                                        </div>
                                                        <div class="card-body">
                                                            <p class="card-text-center">Experience :{users.userid.experience}</p>
                                                            <p class="card-text-center">Projects :{users.userid.projects}</p>
                                                            <p class="card-text-center">Email :{users.userid.email}</p>
                                                            <p class="card-text-center">Phone :{users.userid.phone}</p>
                                                            <p class="card-text-center">Type :{users.jobid}</p>
                                                            <p>Current status for this job: {users.confirmStatus}</p>


                                                            {
                                                                users.confirmStatus === "Confirmed"
                                                                    ? (<div>
                                                                        <button disabled={true} onClick={this.confirmMethod}>Confirm</button> &nbsp;
                                                                        <button onClick={this.denyMethod} >Deny</button>

                                                                    </div>)
                                                                    : users.confirmStatus === "denied"
                                                                    ?(<div>
                                                                        <button  onClick={this.confirmMethod}>Confirm</button> &nbsp;
                                                                        <button disabled={true} onClick={this.denyMethod} >Deny</button>

                                                                    </div>)
                                                                   : (<div>
                                                                        <button onClick={this.confirmMethod}>Confirm</button>&nbsp;
                                                                        <button onClick={this.denyMethod}>Deny</button>

                                                                    </div>)

                                                            }
                                                           

                                                        </div>
                                                    </div>
                                                </Card>
                                                <p></p>
                                            </div>
                                        );
                                    })}


                                    {/* <button class="btn btn-warning">
                                        
                                        <Link to={"/updateProfile2/" + this.state.applied.userid._id}>Update</Link>
                                    </button> */}




                                </div>
                            </div>
                        </Card>
                        <p></p>
                    </div>
                </Row>
            </Container >
        )
    }

}

export default whoApplied;