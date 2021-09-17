import React from 'react';
import featureImg01 from '../../asset/feature-01.png';
import featureImg02 from '../../asset/feature-02.png';
import featureImg03 from '../../asset/feature-03.png';
import './Feature.css';

const Feature = () => {
    return (
        <section class="container-fluid">
            <div className="container feature">
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

                <div className="row gx-5 feature-div">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 feature-text">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                    </div>               
                    <div className="col-md-5 feature-img">
                        <img src={featureImg02} alt="" />
                    </div>
                    <div className="col-md-1"></div>
                </div>


                <div className="row gx-5 feature-div">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 feature-img">
                        <img src={featureImg03} alt="" />
                    </div>
                    <div className="col-md-5 feature-text">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Feature;