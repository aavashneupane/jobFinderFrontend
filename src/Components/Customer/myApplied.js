import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class myApplied extends Component {
    state = {
        jobs: [],
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
                    jobs: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
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
    
    updateJob = (e)=>{
        e.preventDefault()

        axios({
            method: 'put',
            data:this.state,
            url: 'http://localhost:91/job/update',
           // headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((response)=>{
            console.log(response)
            alert("Job update successfull")
        })
        .catch((err)=>{
            console.log(err.response)
            alert("Job update unsuccessfull")
        })
      
    }


    render() {
        return (
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.jobs.map((job) => {
                                return (<div>
                                    <Card body>
                                        <div class="card-text-center" >
                                            <div class="card-header">
                                                <h5 class="card-title">{job.jobid.jobtitle}</h5>
                                            </div>
                                            <div class="card-body">

                                                <p class="card-text-center">Type :{job.jobid.jobtype}</p>
                                                <p>Description:{job.jobid.jobdescription}</p>
                                                <p>Required experience:{job.jobid.requiredexperience}</p>
                                                <p>Email:{job.jobid.email}</p>
                                                <p>Company:{job.jobid.company}</p>
                                                <p>Posted at:{job.createdAt}</p>
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