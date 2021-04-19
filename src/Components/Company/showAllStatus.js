import React, { Component, useState } from 'react';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

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
               
            </Container>
        )
    }

}

export default showAllStatus;