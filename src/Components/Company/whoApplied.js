import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link,useParams } from 'react-router-dom';
import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;




class whoApplied extends Component {
    
    state = {
        jobs: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id : this.props.location.id
    }
  
    
    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:91/job/showWhoApplied/',
            data: this.state.id,
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
          })        
            //axios.get('http://localhost:91/job/showWhoApplied/',this.state.id)
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
        axios({
            method: 'post',
            url: 'http://localhost:91/job/applyJob',
            data: id,
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
          })
          .then((response) => {
                //             console.log(response)
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
        
        return (
            <Container>
                <Row>
                   { alert(this.state.id)}
                    This is who applied page
                    
                </Row>
            </Container>
        )
    }

}

export default whoApplied;