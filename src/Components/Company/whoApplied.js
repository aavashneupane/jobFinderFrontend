import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link, useParams } from 'react-router-dom';
import { Button } from "../../Header/Button";
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
            url: 'http://localhost:91/job/approveJob/'+id,
            data: {confirmStatus:"Confirmed"},
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
            
        })
            // .put("http://localhost:91/job/approve/" + id, this.state.config)
            .then(response => {
                console.log("to update"+id);
                alert("Job has been confirmed")
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
            url: 'http://localhost:91/job/approveJob/'+id,
            data: {confirmStatus:"denied"},
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
                                                        <img src={`http://localhost:91/${users.userid.photo}`} className="img-fluid" style={{ height: "400px" }} />
                                                            <h5 class="card-title">{users.userid.firstname} {users.userid.lastname}</h5>
                                                            <h5 class="card-title">User description: {users.userid.userbio}</h5>
                                                            <p>Resume Link:<a href={`http://localhost:91/${users.userid.resume}`} target="_blank">Click to view the resume</a></p>
                                                        </div>
                                                        <div class="card-body">
                                                            <p class="card-text-center">Experience :{users.userid.experience}</p>
                                                            <p class="card-text-center">Projects :{users.userid.projects}</p>
                                                            <p class="card-text-center">Email :{users.userid.email}</p>
                                                            <p class="card-text-center">Phone :{users.userid.phone}</p>
                                                            <p class="card-text-center">Job ID :{users.jobid}</p>
                                                            <p>Current status for this applicacnt: {users.confirmStatus}</p>


                                                            {
                                                                users.confirmStatus === "Confirmed"
                                                                    ? (<div>
                                                                        <button disabled={true} onClick={this.confirmMethod.bind(this, users._id)}>Confirm</button> &nbsp;
                                                                        <button onClick={this.denyMethod.bind(this, users._id)} >Deny</button>

                                                                    </div>)
                                                                    : users.confirmStatus === "denied"
                                                                        ? (<div>
                                                                            <button onClick={this.confirmMethod.bind(this, users._id)}>Confirm</button> &nbsp;
                                                                            <button disabled={true} onClick={this.denyMethod.bind(this, users._id)} >Deny</button>

                                                                        </div>)
                                                                        : (<div>
                                                                            <button onClick={this.confirmMethod.bind(this, users._id)}>Confirm</button>&nbsp;
                                                                            <button onClick={this.denyMethod.bind(this, users._id)}>Deny</button>

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