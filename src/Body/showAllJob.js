import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
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



    render() {
        return (
            <Container>
                <Row>

                    <div>{
                        this.state.jobs.map((job) => {
                            return (<div>
                                <p>Title :{job.jobtitle}</p>
                                <p>Type :{job.jobtype}</p>
                                <p>Description:{job.jobdescription}</p>
                                <p>Required experience:{job.requiredexperience}</p>
                                <p>Creator:{job.creator}</p>
                                <p>Posted at:{job.createdAt}</p>

                                <p><button onClick={this.deleteJob.bind(this, job._id)}>Delete</button></p>
                                <p><Link to={'/update/' + job._id}>Update</Link></p>
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

export default showAllJob;