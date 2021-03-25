import { Button } from "../Header/Button";
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
const {Component}=require("react");
const axios = require('axios').default;



class Profile extends Component {
    state = {
        user: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:91/profile1/")
            .then((response) => {
                console.log(response)
                this.setState({
                    user: response.data
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

                    <div>
                        this is profile 
                        {
                        this.state.user.map((user) => {
                            return (<div>
                                <p>Name :{user.firstname} {user.lastname}</p>
                                <p>Email :{user.email}</p>
                                <p>Address:{user.address}</p>
                                <p>Age:{user.age}</p>
                                <p>Phone:{user.phone}</p>
                                <p>company:{user.company}</p>
                                <p>foundedin:{user.foundedin}</p>
                                <p>Joined in:{user.createdAt}</p>

                                
                                <p><Link to={'/update/'+user._id}>Update</Link></p>
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