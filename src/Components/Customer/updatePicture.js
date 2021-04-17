import React, { Component } from 'react';
import { Button } from "../../Header/Button";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class updatePicture extends Component {

    state = {
        photo:'',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    
    uploadHandler = (e) => {
        this.setState({
            resume: e.target.files[0]
        })
    }
    async componentDidMount() {
        await axios({
            method: "get",
            url: "http://localhost:91/profile2",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    resume: response.data.resume,
    
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    }


    updateProfile = (e) => {
        e.preventDefault();
        // alert(this.state.id)
        const data = new FormData() // new line
        var image = this.refs.photo.files[0];
     //   var cv = this.refs.file.files[0];
        data.append('photo', image)
        axios({
            method: 'put',
            url: 'http://localhost:91/profile/editPicture/' + this.state.id,
            data: data,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })

            .then((response) => {
                console.log(response)
                alert("Picture update successfull")
                window.location.href = '/profile2';
            })
            .catch((err) => {
                console.log(err.response)
                console.log("no update")
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <div>
                <p>Update Picture</p>

                <Card body>
                    <div class="card-text-center">
                        <div class="card-header"></div>
                        <div class="card-body">


                            <form>
                                
                                
                                
                                <p>
                                Photo<input type="file" name="photo" ref="photo"  onChange={this.fileHandler} />
                                
                                </p>


                                <button onClick={this.updateProfile} class="btn btn-warning">Update Photo</button>
                            </form>





                        </div>
                    </div>
                </Card>
                <p></p>
            </div>
        )
    }

}
export default updatePicture;