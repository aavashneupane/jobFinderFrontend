import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class myListings extends Component {
    state = {
        jobs: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:91/job/showMyListings',
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
        // alert(this.state.config.headers.authorization)
        axios.delete('http://localhost:91/job/delete/' + id, this.state.config)
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
                                                <h5 class="card-title">{job.jobtitle}</h5>
                                            </div>
                                            <div class="card-body">
                                            <img src={`http://localhost:91/${job.photo}`} className="img-fluid" style={{ height: "400px" }} />
                                                <p class="card-text-center">Type :{job.jobtype}</p>
                                                <p>Description:{job.jobdescription}</p>
                                                <p>Required experience:{job.requiredexperience}</p>
                                                <p>Email:{job.creator.email}</p>
                                                <p>Company:{job.creator.company}</p>
                                                <p>Posted at:{job.createdAt}</p>
                                                <p><Button onClick={this.deleteJob.bind(this, job._id)}>Delete</Button></p>
                                               
                                                <p><button class="btn btn-warning"><Link to={'/updateJob/'+job._id}>Update</Link></button></p>
                                                
                                                <p><button class="btn btn-primary"><Link to={'/whoApplied/'+job._id}  >See who applied in this</Link></button></p>
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

export default myListings;