import React, { Component, useState } from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { Button } from "../../Header/Button";
//import { axios } from 'axios';
const axios = require('axios').default;

class showcontactus extends Component {
    state = {
        message: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:91/showAllQuery")
            .then((response) => {
                console.log(response)
                this.setState({
                    message: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    deleteMessage = (id) => {
        // alert(this.state.config.headers.authorization)
        axios.delete('http://localhost:91/query/delete/'+id, this.state.config)
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

        var menu=
        <div>
         {this.state.message.map((query) => {
            return (
              <div>
                <Card body>
                  <div class="card-text-center">
                    <div class="card-header">
                      <h5 class="card-title">{query.userid.firstname} {query.userid.lastname}</h5>
                      <h5 class="card-title">{query.userid.email}</h5>
                      <h5 class="card-title">{query.email}</h5>
                      
                      <h5 class="card-title">{query.firstname} {query.lastname}</h5>
                      <h6 class="card-title">{query.query}</h6>
                    </div>
                    <div class="card-body">
                      

                      <p>
                        <Button onClick={this.deleteMessage.bind(this, query._id)}>
                          Delete
                        </Button>
                      </p>

                     
                    </div>
                  </div>
                </Card>
                <p></p>
              </div>
            );
          })}
</div>

        return (
            <Container>
                {menu}
               
            </Container>
        )
    }

}

export default showcontactus;