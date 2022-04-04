import React from 'react';
import './FeedBack.css'

const FeedBack = (props) => {
    const {name,img,rating,feedback} = props.data;
    return (
        <div className='feedback'>

            <div className="userImg">
                <img src={img} alt="" />
            </div>

            <div className="user-review">
                <h4 className='text-center'>{name}</h4>
                <strong>Rating: {rating}</strong>
                <p className='center-only'>{feedback}</p>
            </div>
        </div>
    );
};

export default FeedBack;