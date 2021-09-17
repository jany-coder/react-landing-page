import React from 'react';
import Header from './../header/Header';
import Feature from './../feature/Feature';
import Testimonial from './../testimonial/testimonial/Testimonial';
import Question from './../question/Question';
import Footer from './../footer/Footer';
import Scroll from './../scroll/Scroll';


const Home = () => {
    return (
        <>
            <Header></Header>
            <Scroll showBelow={250}></Scroll>
            <Feature></Feature>
            <Testimonial></Testimonial>
            <Question></Question>
            <Footer></Footer>
        </>
    );
};

export default Home;