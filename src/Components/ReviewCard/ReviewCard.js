import React from 'react';
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
                <h6>Rating: {rating}</h6>
                <p> {feedback}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;