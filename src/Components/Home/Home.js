import React from 'react';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='banner'>
                <div className="headlines">
                    <h1>Choose Your Next <span className='highlite'>Console</span></h1>
                    <h1>Analysis By <span className='highlite'>PurePD</span></h1>
                    <p>Reviews help you build a stellar online presence right where shoppers are researching their next purchase.Drive customer loyalty with learnings from consumer behavior and sentiment trends across locations and markets.</p>
                </div>
                <div className="bannerImg">
                    <img src="./Images/xbox.png" alt="" />
                </div>
            </div>

            <div className="demo-reviews">

            

            </div>
        </div>
    );

};
export default Home;