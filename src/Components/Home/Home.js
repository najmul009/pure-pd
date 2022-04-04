import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews/useReviews';
import FeedBack from '../FeedBack/FeedBack';
import './Home.css'

const Home = () => {
    const [products]= useReviews()
    const demoFeedBack = products.slice(0,3)
    console.log(demoFeedBack)

    return (
        <div>
            <div className='banner'>
                <div className="headlines">
                    <h1>Choose Your Next <span className='highlite'>Console</span></h1>
                    <h1>Analysis By <span className='highlite'>PurePD</span></h1>
                    <p>PS5 Reviews help you build a stellar online presence right where shoppers are researching their next purchase.Drive customer loyalty with learnings from consumer behavior and sentiment trends across locations and markets.</p>
                </div>
                <div className="bannerImg">
                    <img src="./Images/xbox.png" alt="" />
                </div>
            </div>

            <div className="demo-reviews">
            <h1 >Coustomar FeedBacks (3)</h1>
            <div className='user-feedback'>

            {
                demoFeedBack.map(feedback => <FeedBack key={feedback.id} data={feedback}></FeedBack>)
            }
            </div>

            <div className="show-all">
                
            <Link to='/reviews'> 
                <button className='show-btn'> <strong> Show All Reviews</strong> </button>
             </Link>               
            </div>

            </div>
        </div>
    );

};
export default Home;