import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Services from './Services';
import Reviews from './Reviews';
import Info from './Info';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;