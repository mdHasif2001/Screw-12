import React from 'react';
import Banner from './Banner';
// import Footer from '../Shared/Footer';
import Services from './Services';
import Reviews from './Reviews';
import Info from './Info';
import Contact from './Contact';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Services></Services>
            <Info></Info>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;