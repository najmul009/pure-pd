import React from 'react';
import useReviews from '../../Hooks/useReviews/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    const [products] = useReviews()
    return (
        <div className='reviews'>
                        <h1 className='reviews-title'>What our customers say!</h1>

            {
                products.map(pd => <ReviewCard key={pd.id} data={pd}></ReviewCard>)
            }
        </div>
    );
};

export default Review;