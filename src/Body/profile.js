import { Button } from "../Header/Button";
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
const {Component}=require("react");
const axios = require('axios').default;



class Profile extends Component {
    state = {
        profile: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:91/profile/editProfileCompany/")
            .then((response) => {
                console.log(response)
                this.setState({
                    profile: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    // showProfile = (pid) => {
    //     axios.delete('http://localhost:91/profile/editProfileCompany/' + pid, this.state.config)
    //         .then((response) => {
    //             console.log(response)
    //             alert("Delete successfull")
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //             alert("Delete unsuccessfull")
    //         })

    // }



    render() {
        return (
            <Container>
                <Row>

                    <div>{
                        this.state.profile.map((profile) => {
                            return (<div>
                                <p>Name :{profile.firstname} {profile.lastname}</p>
                                <p>Email :{profile.email}</p>
                                <p>Address:{profile.address}</p>
                                <p>Age:{profile.age}</p>
                                <p>Phone:{profile.phone}</p>
                                <p>company:{profile.company}</p>
                                <p>foundedin:{profile.foundedin}</p>
                                <p>Joined in:{profile.createdAt}</p>

                                <p><Button onClick={this.deleteJob.bind(this, profile._id)}>Delete</Button></p>
                                <p><Link to={'/update/' + profile._id}>Update</Link></p>
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