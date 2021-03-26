import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
//import { axios } from 'axios';
const axios = require('axios').default;

class showAllStatus extends Component {
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
                console.log(err.response)
            })
    }

    deleteJob = (pid) => {
        axios.delete('http://localhost:91/job/delete/' + pid, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }
    applyJob = (pid) => {
        axios.post('http://localhost:91/job/applyJob/' + pid, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Job apply successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("Job apply unsuccessfull")
            })

    }


    render() {
        return (
            <Container>
                <Row>

                    <div>{
                        this.state.jobs.map((job) => {
                            return (<div>
                                
                                <div className="card-text-center" >
                                <div className="card-header">
                                <h5 className="card-title">{job.confirmstatus}</h5>
                                </div>
                                <div className="card-body">
                                    
                                    <p className="card-text-center">Job ID :{job.jobid}</p>
                                    <p>Creator:
                                        {/* {job.jobdescription} */}
                                        </p>
                                    
                                    {/* <p>Creator:{job.creator}</p> */}
                                    <p>Posted at:{job.createdAt}</p>
                                    <p><Button onClick={this.deleteJob.bind(this, job._id)}>Delete</Button></p>
                                    <p><Button onClick={this.applyJob.bind(this, job._id)}>Apply</Button></p>
                                    {/* <button className="btn btn-warning"><Link to={'/update/' + job._id}>Update</Link></button> */}
                                </div>
                                
                                </div>
                             

                                
                                
                                

                               
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

export default showAllStatus;