import { Link } from 'react-router-dom';
import './footer.css';
import { Button } from "react-bootstrap";
const { Component } = require("react");



class Footer extends Component {

    render() {
        return (


            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join us to experience the best job hunting experience
        </p>
                    
                    
                </section>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>Join us now</Link>
                            
                            <Link to='/Login'>About us</Link>
                            
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/contact'>Contact</Link>
                            
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            
                            <a href='https://www.youtube.com/watch?v=x2wNf4evAPM' target='_blank'>Android Video</a>
                            <a href='https://www.youtube.com/watch?v=x2wNf4evAPM' target='_blank'>Web Video</a>
                            
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <Link to='/' className='social-logo'>
                                JOB FINDER
              
                                <i class='fab fa-typo3' />
                            </Link>
                        </div>
                        <medium class='website-rights'>JobFinder © 2021</medium>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

        )
    }

}

export default Footer;