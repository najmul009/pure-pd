import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const {name,img,email,rating,feedback} = props.data;
    return (
        <div className='review-container'>
            <div className="review-card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h6>
                    Email: {email}
                </h6>
                <div >
                    <strong>Rating: </strong>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <p> {feedback}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;