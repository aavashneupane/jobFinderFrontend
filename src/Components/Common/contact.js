import './contact.css';
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
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.inputHandler} />
                    <label for="lname">Last Name</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.inputHandler} />
                    <label for="email">Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} />
                    <label for="subject">Subject</label>
                    <input type="text" name="query" value={this.state.query} onChange={this.inputHandler} />
                    <button className="btn btn-secondary" onClick={this.ifNotLogined}>Submit</button>

                </div>
        }




        return (



            <div className="contact">

                <div class="container">
                    <div>
                        <h2>Contact Us</h2>
                        <p>Swing by for a cup of coffee, or leave us a message:</p>
                    </div>
                    <div class="row">
                        <div class="column">
                            <img src={`http://localhost:91/images/user.jpg`} alt="Jane" style={{ width: "325px" }} ></img>
                        </div>
                        <div class="column">

                            {status}



                        </div>
                    </div>
                </div>

            </div>



        )
    }

}

export default contact;