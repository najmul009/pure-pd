import React from 'react';
import './FeedBack.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FeedBack = (props) => {
    const { name, img, rating, feedback } = props.data;
    return (
        <div className='feedback'>

            <div className="userImg">
                <img src={img} alt="" />
            </div>

            <div className="user-review">
                <h4 className='text-center'>{name}</h4>
                <div className="rating">
                    <strong>Rating: </strong>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>


                <p className='center-only'>{feedback}</p>
            </div>
        </div>
    );
};

export default FeedBack;