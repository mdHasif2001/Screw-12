import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Services from './Services';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;