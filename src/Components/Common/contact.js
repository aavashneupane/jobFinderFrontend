
import { Redirect, Link } from 'react-router-dom';
const axios = require('axios').default;
const { Component } = require("react");



class contact extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        query: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ifLogined = (e) => {

        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:91/addQuery',
            data: this.state,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            .then(response => {
                console.log(response);
                //console.log(response.data);
                alert("Feedback has been sent")

            })
            .catch(err => {
                console.log(err.response);
                alert("error sending feedback")

            })

    };
    ifNotLogined = (e) => {
        alert(this.state.query)
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:91/addQuery1',
            data: this.state,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            .then(response => {
                console.log(response);
                //console.log(response.data);
                alert("Feedback has been sent")

            })
            .catch(err => {
                console.log(err.response);
                alert("error sending feedback")

            })

    };

    render() {
        if (localStorage.getItem('token')) {
            var status =
                <div>
                    <label for="subject">Subject</label>
                    <input type="text" name="query" value={this.state.query} onChange={this.inputHandler} />
                    <button className="btn btn-secondary" onClick={this.ifLogined}>Submit</button>

                </div>
        } else {
            var status =
                <div>
                    <label for="fname">First Name</label>
                    <input type="text" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.inputHandler} />
                    <label for="lname">Last Name</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.inputHandler} placeholder="Last Name" />
                    <label for="email">Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
                    <label for="subject">Subject</label>
                    <input type="text" name="query" value={this.state.query} onChange={this.inputHandler} placeholder="Your message" />
                    <button className="btn btn-secondary" onClick={this.ifNotLogined}>Submit</button>

                </div>
        }




        return (

            <div className="login">

                <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div class="card card0 border-0">
                        <div class="row d-flex">
                            <div class="col-lg-6">
                                <div class="card1 pb-5">
                                    <div class="row">
                                        <div class="row px-5 justify-content-center mt-3 mb-5 border-line"> <h1>Contact Us</h1> </div>
                                    </div>
                                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={`http://localhost:91/images/contactus.png`} alt="contactus" style={{ width: "380px",height: "480px", }} ></img></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card2 card border-0 px-4 py-5">
                                                                 <p>Place all your queries over here and we will contact you soon.</p>
                                    <p></p><p></p><p></p>
                                    {status}
                                   
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }

}

export default contact;