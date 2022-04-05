import React from 'react';
import { useState } from 'react';
import './About.css'

const About = (props) => {
    const [text, setText] = useState('Message');

    return (
        <div>

            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>CONTACT HERE TO KNOW MORE ABOUT US.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <form id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input className="contactus" placeholder="Name" type="type" name="Name" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Email" type="type" name="Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Phone Number" type="type"  />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea onChange={(e) => setText(e.target.value)}className="textarea" placeholder="Message" type="type" value={text} > </textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="send_btn">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About; <h1>About</h1>