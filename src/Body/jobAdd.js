import React , { Component} from 'react';
import { Button } from "../Header/Button";
//import { axios } from 'axios';
const axios = require('axios').default;

class jobAdd extends Component {
state={
    jobtitle:'',
    jobtype:'',
    jobdescription:'',
    requiredexperience:'',
    jobprice:'',
    config:{
        headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    }
}

inputHandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
jobAddMethod=(e)=>{
    
    e.preventDefault()
    axios.post("http://localhost:91/job/add", this.state)
    .then(response => {
        console.log(response);
        alert("Job has been added")
    })
    .catch(err => {
        console.log(err.response);
        alert("Error adding job")
    })
    
  
};
render() {
    return (
        <div>
            This is add Job.
            <form>
                <p>
                    <label>Job Title</label>
                    <input type="text" value={this.state.jobtitle} name="jobtitle" onChange={this.inputHandler} />
                </p>
                <p>
                    <label>Job type</label>
                    <input type="text" value={this.state.jobtype} name="jobtype" onChange={this.inputHandler} />
                </p>
                <p>
                    <label>Job description</label>
                    <input type="text" value={this.state.jobdescription} name="jobdescription" onChange={this.inputHandler} />
                </p>

                <p>
                    <label>Required experience</label>
                    <input type="text" value={this.state.requiredexperience} name="requiredexperience" onChange={this.inputHandler} />
                </p>
                <p>
                    <label>Job price</label>
                    <input type="text" value={this.state.jobprice} name="jobprice" onChange={this.inputHandler} />
                </p>

                <p>
                    <Button onClick={this.jobAddMethod}>Add Job</Button>
                    
                </p>
            </form>

        </div>
    )
}

}

export default jobAdd;