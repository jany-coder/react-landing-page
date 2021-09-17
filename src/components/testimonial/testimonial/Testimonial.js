import React from 'react';
import TestimonialCard from '../testimonialCard/TestimonialCard';
import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


const Testimonial = () => {

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }

    return (
        <section class="container-fluid testimonial temp">
            <h2>Testimonial</h2>
           
                <OwlCarousel className="owl-div owl-theme" item={1}
                    {...options}
                    loop={true}
                    center={true}
                    nav={true}
                    dot={true}
                    marginLeft={10}


                >

                    <div className='item d-flex justify-content-center'>
                        <TestimonialCard />
                    </div>
                    <div className='item d-flex justify-content-center'>
                        <TestimonialCard />
                    </div>
                    <div className='item d-flex justify-content-center'>
                        <TestimonialCard />
                    </div>
                    <div className='item d-flex justify-content-center'>
                        <TestimonialCard />
                    </div>
                    <div className='item d-flex justify-content-center'>
                        <TestimonialCard />
                    </div>

                </OwlCarousel>
           
        </section>
    );
};

export default Testimonial;