import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class showAllJob extends Component {
    state = {
        jobs: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:91/job/showall")
            .then((response) => {
                console.log(response)
                this.setState({
                    jobs: response.data
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }

    deleteJob = (id) => {
        axios.delete('http://localhost:91/job/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }
    applyJob = (id) => {
        axios.post('http://localhost:91/job/applyJob/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Job apply successfull")
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Job apply unsuccessfull")
            })

    }
    // updateJob = (e)=>{
    //     e.preventDefault()
    //     axios.put("http://localhost:90/job/update", this.state)
    //     .then((response)=>{
    //         console.log(response)
    //         alert("Job update successfull")
    //     })
    //     .catch((err)=>{
    //         console.log(err.response)
    //         alert("Job update unsuccessfull")
    //     })
    // }


    render() {
        if(localStorage.getItem('token') && localStorage.getItem('role')==='Admin')
        {
        var loggedStatus =
            <div>
                <p></p>

                {
                    this.state.jobs.map((job) => {
                        return (<div>
                            <Card body>
                                <div class="card-text-center" >
                                    <div class="card-header">
                                        <h5 class="card-title">{job.jobtitle}</h5>
                                    </div>
                                    <div class="card-body">

                                        <p class="card-text-center">Type :{job.jobtype}</p>
                                        <p>Description:{job.jobdescription}</p>
                                        <p>Required experience:{job.requiredexperience}</p>
                                        <p>Email:{job.creator.email}</p>
                                        <p>Company:{job.creator.company}</p>
                                        <p>Posted at:{job.createdAt}</p>

                                        <p><Button onClick={this.deleteJob.bind(this, job._id)}>Delete</Button></p>
                                       
                                        <button class="btn btn-warning"><Link to={'/updateJob/' + job._id}>Update</Link></button>

                                    </div>

                                </div>







                            </Card>
                            <p></p>
                        </div>
                        )
                    })
                }

            </div>
            }
            else if(localStorage.getItem('token') && localStorage.getItem('role')==='Customer'){
                var loggedStatus =
                <div>
                    <p></p>
    
                    {
                        this.state.jobs.map((job) => {
                            return (<div>
                                <Card body>
                                    <div class="card-text-center" >
                                        <div class="card-header">
                                            <h5 class="card-title">{job.jobtitle}</h5>
                                        </div>
                                        <div class="card-body">
    
                                            <p class="card-text-center">Type :{job.jobtype}</p>
                                            <p>Description:{job.jobdescription}</p>
                                            <p>Required experience:{job.requiredexperience}</p>
                                            <p>Email:{job.creator.email}</p>
                                            <p>Company:{job.creator.company}</p>
                                            <p>Posted at:{job.createdAt}</p>
    
                                           
                                            <p><Button onClick={this.applyJob.bind(this, job._id)}>Apply</Button></p>
                                           
    
                                        </div>
    
                                    </div>
    
    
    
    
    
    
    
                                </Card>
                                <p></p>
                            </div>
                            )
                        })
                    }
    
                </div>
            }
            else{
                // window.location.href = '/login';
            }

        return (
            <Container>
                <Row>
                        {loggedStatus}

                    
                </Row>
            </Container>
        )
    }

}

export default showAllJob;