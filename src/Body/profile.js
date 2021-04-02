import { Button } from "../Header/Button";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
const { Component } = require("react");
const axios = require("axios").default;

class Profile extends Component {
  state = {
    users: {},
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    //userid:localStorage.getItem('id')
  };

  async componentDidMount() {
    await axios({
      method: "get",
      url: "http://localhost:91/profile1",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        // console.log(response.data)
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
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
            <p>Company Profile</p>

            <Card body>
              <div class="card-text-center">
                <div class="card-header"></div>
                <div class="card-body">
                  <p>
                    Name :{this.state.users.firstname}{" "}
                    {this.state.users.lastname}
                  </p>
                  <p>Email :{this.state.users.email}</p>
                  <p>Address:{this.state.users.address}</p>
                  <p>Age:{this.state.users.age}</p>
                  <p>Phone:{this.state.users.phone}</p>
                  <p>company:{this.state.users.company}</p>
                  <p>foundedin:{this.state.users.foundedin}</p>
                  <p>Joined in:{this.state.users.createdAt}</p>
                  <button class="btn btn-warning">
                    <Link to={"/updateProfile/"+this.state.users._id}>Update</Link>
                  </button>
                </div>
              </div>
            </Card>
            <p></p>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Profile;
