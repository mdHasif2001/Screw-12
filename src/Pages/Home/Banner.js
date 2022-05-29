import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div class="carousel-item relative w-full">
                <img src={banner} class="rounded-box" />
            </div>
        </div>
    );
};

export default Banner;