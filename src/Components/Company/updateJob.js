import React, { Component } from 'react';
import { Button } from "../../Header/Button";
const axios = require('axios').default;

class updateJob extends Component {

    state = {
        jobtitle: '',
        jobdescription: '',
        config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        id: this.props.match.params.id
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    componentDidMount() {
        axios.get('http://localhost:91/job/showSingle/' + this.state.id)
            .then((response) => {
                this.setState({
                    jobtitle: response.data.jobtitle,
                    jobdescription: response.data.jobdescription,
                })


            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    updateJob = (e) => {
        e.preventDefault();
        axios.put('http://localhost:91/job/update', this.state)
            .then((response) => {
                console.log(response)
                alert("update successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <form>
                <p>
                    job title
                    <input type="text"
                    value={this.state.jobtitle}
                    name="jobtitle"
                    onChange={this.changeHandler}
                    />
                </p>
                <p>
                    Job description
                    <input type="text"
                    value={this.state.jobdescription}
                    name="jobdescription"
                    onChange={this.changeHandler}
                    />
                </p>
                
                <button onClick={this.updateJob}>Update</button>
            </form>
        )
    }

}
export default updateJob;