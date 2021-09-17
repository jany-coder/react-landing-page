import React from 'react';
import featureImg01 from '../../asset/feature-01.png';
import './Question.css';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const Question = () => {
    return (
        <section class="container-fluid">
            <div className="container question">
                <div className="row gx-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 feature-img">
                        <img src={featureImg01} alt="" />
                    </div>
                    <div className="col-md-5 feature-text">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div class="question-div">
                    <div class="text-center question-text">
                        <h2>Question</h2>
                        <p>Help is free, and TritaTech  is ready to assist you to<br />
                            make sure everything goes smoothly
                        </p>
                    </div>
                    <div class="question-icon d-flex justify-content-center">
                        <div class="icon-div">
                            <FaRegEnvelope />
                        </div>
                        <div class="icon-div">
                            <FaPhoneAlt />
                        </div>
                        <div class="icon-div">
                            <FaWhatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;