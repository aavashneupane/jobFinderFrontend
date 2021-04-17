import { Link } from 'react-router-dom';
import './footer.css';
const { Component } = require("react");



class Footer extends Component {

    render() {
        return (

            <div className="footer">
                <p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></p>
                <section id="footer">
                    <div class="container">
                        <div class="row text-center text-xs-center text-sm-left text-md-left">
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><Link to="/contact"><i class="fa fa-angle-double-right"></i>Contact Us</Link></li>
                                    <li><Link to="/aboutus"><i class="fa fa-angle-double-right"></i>About Us</Link></li>
                                    <li><Link to="/contact"><i class="fa fa-angle-double-right"></i>FAQ</Link></li>
                                    <li><Link to="/"><i class="fa fa-angle-double-right"></i>Get Started</Link></li>
                                    <li><Link to="/contact"><i class="fa fa-angle-double-right"></i>Videos</Link></li>
                                </ul>
                            </div>
                            
                           
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul class="list-unstyled list-inline social text-center">
                                    
                                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/aavash-neupane-9ba053189/"><i class="fa fa-linkedin"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.facebook.com/aavash7/"><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.instagram.com/_aavashh_/"><i class="fa fa-instagram"></i></a></li>
                                    
                                    
                                    
                                </ul>
                            </div>
                            <hr/>
			</div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                    <p><u>Find your dream job right now.</u></p>
                                    <p class="h6"><a class="text-green ml-2" href="https://www.linkedin.com/in/aavash-neupane-9ba053189/" target="_blank">Aavash Neupane</a></p>
                                </div>
                                <hr/>
			</div>
                            </div>
	</section>
                    </div>
        )
    }

}

export default Footer;