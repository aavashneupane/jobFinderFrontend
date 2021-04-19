import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
      url: "http://localhost:91/profile",
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


          <Card body>
            <div class="py-5 service-22">
              <div class="container">

                <div class="row wrap-service-22">

                  <div class="col-lg-6">
                    <img src={`http://localhost:91/${this.state.userss.photo}`} class="rounded img-shadow img-fluid" alt="profile" style={{ height: "400px" }} />
                    <p>Resume Link:<a href={`http://localhost:91/${this.state.userss.resume}`} target="_blank">Click to view my resume</a></p>
                  </div>

                  <div class="col-lg-6 mt-4 mt-md-0">
                    <div class="text-box"> <small class="text-info font-weight-medium">User Profile</small>
                      <h4 class="font-weight-light mt-2 mb-4">Name <span class="text-megna">{this.state.userss.firstname}{" "}{this.state.userss.lastname}</span></h4>
                      <h6 class="font-weight-light mt-2 mb-4">Email <span class="text-megna">{this.state.userss.email}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Phone number <span class="text-megna">{this.state.userss.phone}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Address <span class="text-megna">{this.state.userss.address}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Age <span class="text-megna">{this.state.userss.age}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">My Bio</h6>
                      <p>{this.state.userss.userbio}</p>

                      <h6 class="font-weight-light mt-2 mb-4">Experience <span class="text-megna">{this.state.userss.experience}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Projects <span class="text-megna">{this.state.userss.projects}</span></h6>

                      <Link to={"/updateProfile2/" + this.state.userss._id}> <button class="btn btn-info-gradiant btn-md text-white border-0" href="#f20"><span>Update Details</span></button></Link>  &nbsp; &nbsp; &nbsp;
                    <Link to={"/updatePicture/" + this.state.userss._id}><button class="btn btn-info-gradiant btn-md text-white border-0" href="#f20"><span>Update Picture</span></button></Link>  &nbsp; &nbsp; &nbsp;
                    <p> </p>
                      <Link to={"/updateResume/" + this.state.userss._id}><button class="btn btn-info-gradiant btn-md text-white border-0" href="#f20"><span>Update Resume</span></button></Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>



          </Card>
        </Row>
      </Container>
    );
  }
}

export default Profile2;
