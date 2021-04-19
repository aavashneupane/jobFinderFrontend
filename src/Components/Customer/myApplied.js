import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

import { Card,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
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
            url: 'http://localhost:91/job/showMyApplied2',
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



        Swal.fire({
            title: 'Delete this application?',
            icon: 'warning',
      
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete('http://localhost:91/job/deleteMyApplied/' + id, this.state.config)
                .then((response) => {
                    console.log(response)
                    //alert("Delete successfull")
                    Swal.fire(
                        'Deleted',
                        'Your have successfully deleted this application.',
                        'success'
                      )
                    window.location.reload()
                })
                .catch((err) => {
                    //console.log(err.response)
                    alert("Delete unsuccessfull")
                })
              
            }
      
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
                                    <div class="py-5 service-22">
                                        <div class="container">

                                            <div class="row wrap-service-22">

                                                <div class="col-lg-6">
                                                    <img src={`http://localhost:91/${job.jobid.photo}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "400px" }} />
                                                </div>

                                                <div class="col-lg-6 mt-4 mt-md-0">
                                                    <div class="text-box">
                                                        <h4 class="font-weight-light mt-2 mb-4">Job Title: <span class="text-megna">{job.jobid.jobtitle}</span></h4>
                                                        <h6 class="font-weight-light">Job Type: <span class="text-megna">{job.jobid.jobtype}</span></h6>
                                                        <h6 class="font-weight-light">Description: </h6><p>{job.jobid.jobdescription}</p>

                                                        <h6 class="font-weight-light">Required Experience: <span class="text-megna">{job.jobid.requiredexperience}</span></h6>
                                                        <h6 class="font-weight-light">Job Price: <span class="text-megna">{job.jobid.jobprice}</span></h6>
                                                        {/* <h6 class="font-weight-light">Email of company: <span class="text-megna">{job.jobid.creator.email}</span></h6>
                                                        <h6 class="font-weight-light">Company: <span class="text-megna">{job.jobid.creator.company}</span></h6> */}
                                                        <h6 class="font-weight-light">Applied on: <span class="text-megna">{job.createdAt}</span></h6>

                                                        {
                                                            job.confirmStatus === "Confirmed"
                                                                ? (<p>Your job application has been confirmed by company.</p>)
                                                                : job.confirmStatus === "denied"
                                                                    ? (<p>Your job application has been denied by the company.</p>)

                                                                    : (<p class=".text-primary">Your job application is not reviewed by company.</p>)
                                                        }

                                                        <button class="btn btn-info-gradiant btn-md text-white border-0" onClick={this.deleteJob.bind(this, job._id)}><span>Delete this application</span></button>

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

export default myApplied;