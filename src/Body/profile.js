import { Button } from "../Header/Button";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
const { Component } = require("react");
const axios = require('axios').default;



class Profile extends Component {
    state = {
        users: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        //userid:localStorage.getItem('id')
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:91/profile1',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log("This is profile: " + response.data._id + "     " + response.data.email)
                this.setState({
                    users: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }

    // showProfile = (pid) => {
    //     axios.delete('http://localhost:91/profile/showProfileCompany/' + pid, this.state.config)
    //         .then((response) => {
    //             console.log(response)
    //             alert("Show successfull")
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //             alert("Show unsuccessfull")
    //         })

    // }



    render() {
        return (
            <Container>
                <Row>

                    <div>
                        <p>Users Profile</p>

                        {
                            this.state.users.map((user) => {
                                return (<div>
                                    <Card body>
                                        <div class="card-text-center" >
                                            <div class="card-header">
                                                
                                            </div>
                                            <div class="card-body">

                                                
                                                <p>Name :{user.firstname} {user.lastname}</p>
                                                <p>Email :{user.email}</p>
                                                <p>Address:{user.address}</p>
                                                <p>Age:{user.age}</p>
                                                <p>Phone:{user.phone}</p>
                                                <p>company:{user.company}</p>
                                                <p>foundedin:{user.foundedin}</p>
                                                <p>Joined in:{user.createdAt}</p>

                                         
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


export default Profile;