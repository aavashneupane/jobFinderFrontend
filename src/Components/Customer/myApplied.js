import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class myApplied extends Component {
    state = {
        appliedjobs: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:91/job/showMyApplied',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                this.setState({
                    appliedjobs: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteJob = (id) => {
        axios.delete('http://localhost:91/job/deleteMyApplied/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                window.location.reload()
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }




    render() {

        // if(job.confirmstatus===false){
        //     var status=<div>
        // <p>This job is not confirmed.</p>
        // </div>
        // }else{
        //     var status=
        //     <div>
        //     <p>This job is confirmed.</p>
        //     </div>
        // }


        return (
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.appliedjobs.map((job) => {
                                return (<div>
                                    <Card body>
                                        <div class="card-text-center" >
                                            <div class="card-header">
                                                <h5 class="card-title">{job.jobid.jobtitle}</h5>
                                            </div>
                                            <div class="card-body">
                                            <img src={`http://localhost:91/${job.jobid.photo}`} className="img-fluid" style={{ height: "400px" }} />
                                                <p class="card-text-center">Type :{job.jobid.jobtype}</p>
                                                <p>Description:{job.jobid.jobdescription}</p>
                                                <p>Required experience:{job.jobid.requiredexperience}</p>
                                                <p>Email:{job.jobid.email}</p>
                                                <p>Company:{job.jobid.company}</p>
                                                <p>Posted at:{job.createdAt}</p>

                                                {
                                                    job.confirmStatus === "Confirmed"
                                                        ? (<p>Your job application has been confirmed by company.</p>)
                                                        : job.confirmStatus === "denied"
                                                        ? (<p>Your job application has been denied by the company.</p>)

                                                        : (<p>Your job application is not reviewed by company.</p>)
                                                }

                                                <p><Button onClick={this.deleteJob.bind(this, job._id)}>Delete</Button></p>


                                            </div>

                                        </div>







                                    </Card>
                                    <p></p>
                                </div>
                                )
                            })
                        }

                    </div>
                    <Col></Col>
                </Row>
            </Container>
        )
    }

}

export default myApplied;