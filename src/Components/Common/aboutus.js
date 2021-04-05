import './aboutus.css';
const { Component } = require("react");



class aboutus extends Component {



    render() {
        return (



            <div className="aboutus">
                <div class="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>

                <h2>Our Team</h2>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src={`http://localhost:91/images/user.jpg`} alt="Jane" style={{width:"325px"}} ></img>
                                <div class="container">
                                    <h2>Jane Doe</h2>
                                    <p class="title">CEO & Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>jane@example.com</p>
                                    <p><button class="button">Contact</button></p>
                                </div>
    </div>
                        </div>

                        <div class="column">
                            <div class="card">
                            <img src={`http://localhost:91/images/user.jpg`} alt="Jane" style={{width:"325px"}} ></img>
                                    <div class="container">
                                        <h2>Mike Ross</h2>
                                        <p class="title">Art Director</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>mike@example.com</p>
                                        <p><button class="button">Contact</button></p>
                                    </div>
    </div>
                            </div>

                            <div class="column">
                                <div class="card">
                                    <img src={`http://localhost:91/images/user.jpg`} alt="Jane" style={{width:"325px"}} ></img>
                                        <div class="container">
                                            <h2>John Doe</h2>
                                            <p class="title">Designer</p>
                                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                            <p>john@example.com</p>
                                            <p><button class="button">Contact</button></p>
                                        </div>
    </div>
                                </div>
                            </div>



                        </div>





        )
    }

}

export default aboutus;