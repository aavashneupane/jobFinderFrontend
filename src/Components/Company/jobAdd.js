import React, { Component } from 'react';
import { Container, Row, Col,Button } from "react-bootstrap";
//import { axios } from 'axios';
const axios = require('axios').default;

class jobAdd extends Component {
    state = {
        jobtitle: '',
        jobtype: '',
        jobdescription: '',
        requiredexperience: '',
        jobprice: '',
        photo: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    jobAddMethod = (e) => {


        e.preventDefault()
        const data = new FormData() // new line
        var image = this.refs.photo.files[0];
        data.append('jobtitle', this.state.jobtitle)
        data.append('jobtype', this.state.jobtype)
        data.append('jobdescription', this.state.jobdescription)
        data.append('requiredexperience', this.state.requiredexperience)
        data.append('jobprice', this.state.jobprice)
        data.append('photo', image)
        
        axios({
            method: 'post',
            url: 'http://localhost:91/job/add',
            data: data,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            // axios.post("http://localhost:91/job/add", this.state.config,data)
            .then(response => {
                console.log(response);
                alert("Job has been added")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error adding job")
            })


    };
    render() {
        return (
            
            <div className="auth-wrapper-job">
                <div className="auth-inner-job">
                    <div className="job-form">
                        <div>
                            <div className="job-title">
                                ADD JOB 
                            </div>
                            <form>
                                <div className="form-group">
                                    <label>Job Title</label>
                                    <input type="text" className="form-control" placeholder="Enter Job Title" value={this.state.jobtitle} name="jobtitle"
                                        onChange={this.inputHandler}/>
                                </div>
                                
                                <div className="form-group">
                                    <label>Job Type</label>
                                    <input type="text" className="form-control" placeholder="Enter Job Type" value={this.state.jobtype} name="jobtype"
                                        onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Job Description</label>
                                    <input type="text" className="form-control" placeholder="Enter Job Description" value={this.state.jobdescription} name="jobdescription"
                                        onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Required Experience</label>
                                    <input type="text" className="form-control" placeholder="Enter Required Experience" value={this.state.requiredexperience} name="requiredexperience"
                                        onChange={this.inputHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Job Price</label>
                                    <input type="text" className="form-control" placeholder="Enter Job Price" value={this.state.jobprice} name="jobprice"
                                        onChange={this.inputHandler}/>
                                </div>
                                <p>
                                    <input type="file" name="photo" ref="photo"/>
                                </p>
                                <p>
                                    <Button variant="danger" onClick={this.jobAddMethod}>Add Job</Button>

                                </p>
                            

                                
                        
                            </form>

                        </div>
                    </div>
                </div>
            </div>

           
        )
    }

}

export default jobAdd;