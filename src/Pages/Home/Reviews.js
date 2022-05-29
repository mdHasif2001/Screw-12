import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Jon Doe',
            review: '5.00',
            description: 'They provide us wonderful service. I will strongly recommend all of you to purchase all the essential tool from this website',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '4.00',
            description: 'The best service I have ever seen in my online marketing experience. I will strongly recommend this website for you.',
            location: 'new york',
            img: people2
        },
        {
            _id: 3,
            name: 'Prince',
            review: '4.5',
            description: 'The best thing about the website is they provide very nice services. And the product quality is amazed me soo much.',
            location: 'texas',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex text-center'>
                <div className='flex mx-auto'>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;