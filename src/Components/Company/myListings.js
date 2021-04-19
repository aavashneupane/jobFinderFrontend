import React, { Component, useState } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

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
                                return (



                                    
                                    <div className="login">

                                    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                                        <div class="card card0 border-0">
                                            <div class="row d-flex">
                                                <div class="col-lg-6">
                                                    <div class="card1 pb-5">
                                                        <div class="row">
                                                            <div class="row px-5 justify-content-center mt-3 mb-5 border-line"> <h1>{job.jobtitle}</h1> </div>
                                                        </div>
                                                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={`http://localhost:91/${job.photo}`} class="image" /> </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="card2 card border-0 px-4 py-5">
                                                        <h4>Job Type: {job.jobtype}</h4>
                                                        <p></p><p></p><p></p><p></p><p></p>
                                                        <div class="row px-3 mb-4">
                                                        <h6 class="mb-0 text-sm">Job Description:  </h6>
                                                        <h6 class="mb-0 text-sm">{job.jobdescription}</h6>
                                                        </div>
                                                        
                                                        <div class="row px-3 mb-4">
                                                        <h6 class="mb-0 text-sm">Required Experience:  </h6>
                                                        <h6 class="mb-0 text-sm">{job.requiredexperience}</h6>
                                                        </div>
                                                        <div class="row px-3 mb-4">
                                                        <h6 class="mb-0 text-sm">Job Salary:  </h6>
                                                        <h6 class="mb-0 text-sm">{job.jobprice}</h6>
                                                        </div>
                                                        <div class="row px-3 mb-4">
                                                        <h6 class="mb-0 text-sm">Email:  </h6>
                                                        <h6 class="mb-0 text-sm">{job.creator.email}</h6>
                                                        </div>
                                                        <div class="row px-3 mb-4">
                                                        <h6 class="mb-0 text-sm">Posted on:  </h6>
                                                        <h6 class="mb-0 text-sm"> {job.createdAt}</h6>
                                                        </div>
                                                        
                                                        <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={this.deleteJob.bind(this, job._id)}>Delete this.</button> </div>
                                                        <Link to={'/updateJob/'+job._id}><div class="row mb-4 px-3"><button type="submit" class="btn btn-blue text-center">Update</button>  </div></Link>
                                                        <Link to={'/whoApplied/'+job._id}><div class="row mb-4 px-3"><button type="submit" class="btn btn-blue">Applicants</button>  </div></Link>
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




                
            </Container>
        )
    }

}

export default myListings;