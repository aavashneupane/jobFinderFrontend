import React, { Component } from 'react';
import { Button } from "../../Header/Button";
const axios = require('axios').default;

class updateJob extends Component {

    state = {
        jobtitle: '',
        jobtype: '',
        jobdescription: '',
        requiredexperience: '',
        jobprice: '',
        config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        id : this.props.match.params.id
    }
    componentDidMount() {
        
        axios.get('http://localhost:91/job/showSingle/' + this.state.id,this.state.config)
            .then((response) => {
                this.setState({
                    jobtitle: response.data.jobtitle,
                    jobtype: response.data.jobtype,
                    jobdescription: response.data.jobdescription,
                    requiredexperience: response.data.requiredexperience,
                    jobprice: response.data.jobprice,
                })


            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    

    updateJob = (e) => {
        e.preventDefault();
        axios({
            method: 'put',
            url: 'http://localhost:91/job/update/' + this.state.id,
            data: this.state,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })
        //axios.put('http://localhost:91/job/update'+this.state)
            .then((response) => {
                console.log(response)
                alert("job update successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <form>
                Jobtitle:
                
                <p>
                    job title
                    <input type="text"
                    value={this.state.jobtitle}
                    name="jobtitle"
                    onChange={this.changeHandler}
                    />
                </p>
                <p>
                    job type
                    <input type="text"
                    value={this.state.jobtype}
                    name="jobtype"
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
                <p>
                    Required Experience
                    <input type="text"
                    value={this.state.requiredexperience}
                    name="requiredexperience"
                    onChange={this.changeHandler}
                    />
                </p>
                <p>
                    jobprice
                    <input type="text"
                    value={this.state.jobprice}
                    name="jobprice"
                    onChange={this.changeHandler}
                    />
                </p>
                
                <button onClick={this.updateJob}>Update Job</button>
            </form>
        )
    }

}
export default updateJob;