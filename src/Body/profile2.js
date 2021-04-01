import { Button } from "../Header/Button";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
const { Component } = require("react");
const axios = require("axios").default;

class Profile2 extends Component {
  state = {
    userss: {},
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    //userid:localStorage.getItem('id')
  };

  async componentDidMount() {
    await axios({
      method: "get",
      url: "http://localhost:91/profile2",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
         console.log(response.data)
        this.setState({
          userss: response.data,
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
            <p>Customers Profile</p>

            <Card body>
              <div class="card-text-center">
                <div class="card-header"></div>
                <div class="card-body">
                  <p>
                    Name :{this.state.userss.firstname}{" "}
                    {this.state.userss.lastname}
                  </p>
                  <p>Email :{this.state.userss.email}</p>
                  <p>Address:{this.state.userss.address}</p>
                  <p>Age:{this.state.userss.age}</p>
                  <p>Phone:{this.state.userss.phone}</p>
                  <p>Projects:{this.state.userss.projects}</p>
                  <p>experience:{this.state.userss.experience}</p>
                  <p>Joined in:{this.state.userss.createdAt}</p>
                  <button class="btn btn-warning">
                  <Link to={"/updateProfile2/" + this.state.userss._id}>Update</Link>
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

export default Profile2;
