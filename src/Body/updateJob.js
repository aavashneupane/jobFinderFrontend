import React, { Component } from 'react';
const axios = require('axios').default;

class updateJob extends Component {

    state = {
        jobtitle: '',
        jobdescription: '',
        // config:{
        //     headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        // },
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

    updateData = (e) => {
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
            <div>
                <form>
                    <p><label>Job name</label>
                        <input type="text" name="jobtitle"
                            value={this.state.jobtitle}
                            onChange={this.changeHandler} />
                    </p>

                    <p>
                        Job Description
                    <input type="text"
                            name="jobdescription"
                            value={this.state.jobdescription}
                            onChange={this.changeHandler}
                        />
                    </p>
                    <p>
                        <button onClick={this.updateData}>Update</button>
                    </p>
                </form>
            </div>
        )
    }

}
export default updateJob;