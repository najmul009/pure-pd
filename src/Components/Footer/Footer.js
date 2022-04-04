import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <Link to='/'>Home</Link>
                            <li><Link to='/reviews'>Reviews</Link></li>
                            <li><Link to='/dashboard'>DashBoard</Link></li>
                            <li><Link to='/blog'>QNA</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to='/about'>Contact</Link></li>
                            <li><Link to='/about'>Email</Link></li>
                            <li><Link to='/about'>Address</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>PurePD</h3>
                        <p>Reviews help you build a stellar online presence right where shoppers are researching their next purchase.Drive customer loyalty with learnings from consumer behavior and sentiment trends across locations and markets.</p>
                    </div>
                    <div className="col item social">
                        <Link to='/'><i className="icon ion-social-facebook"></i></Link>
                        <Link to='/'><i className="icon ion-social-twitter"></i></Link>
                        <Link to='/'><i className="icon ion-social-snapchat"></i></Link>
                        <Link to='/'><i className="icon ion-social-instagram"></i></Link>
                    </div>
                </div>
                <p className="copyright">PurePD © 2022</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;