
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
        console.log("Data" + response.data._id)
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


          <Card body>
            <div class="py-5 service-22">
              <div class="container">

                <div class="row wrap-service-22">

                  <div class="col-lg-6">
                    <img src={`http://localhost:91/${this.state.users.photo}`} class="rounded img-shadow img-fluid" alt="profile" style={{ height: "400px" }} />

                  </div>

                  <div class="col-lg-6 mt-4 mt-md-0">
                    <div class="text-box"> <small class="text-info font-weight-medium">User Profile</small>
                      <h4 class="font-weight-light mt-2 mb-4">Name  :<span class="text-megna">{this.state.users.firstname}{" "}{this.state.users.lastname}</span></h4>
                      <h6 class="font-weight-light mt-2 mb-4">Email  :<span class="text-megna">{this.state.users.email}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Phone number  :<span class="text-megna">{this.state.users.phone}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Address  :<span class="text-megna">{this.state.users.address}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Age  :<span class="text-megna">{this.state.users.age}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Company  :<span class="text-megna">{this.state.users.company}</span></h6>
                      <h6 class="font-weight-light mt-2 mb-4">Founded in  :<span class="text-megna">{this.state.users.foundedin}</span></h6>
                      <small class="text-info font-weight-medium">Joined on  :{this.state.users.createdAt}</small><br></br><br></br>

                      <Link to={"/updateProfile/" + this.state.users._id}> <button class="btn btn-info-gradiant btn-md text-white border-0" href="#f20"><span>Update Details</span></button></Link>  &nbsp; &nbsp; &nbsp;



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

export default Profile;
