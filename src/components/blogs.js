import React from 'react';
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";

const Blogs = () => {
    return (
        <>
            <section className="blogs" id="blogs">

                <h1 className="heading"> our daily posts </h1>

                <div className="swiper blogs-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <img src={img1} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={img2} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={img3} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={img4} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={img5} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                        <div className="swiper-slide slide">
                            <img src={img6} alt=""/>
                                <div className="icons">
                                    <a href="#"> <i className="fas fa-calendar"/> 21st may, 2021 </a>
                                    <a href="#"> <i className="fas fa-user"/> by admin </a>
                                </div>
                                <h3>blog title goes here.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                    deserunt.</p>
                                <a href="#" className="btn">read more</a>
                        </div>

                    </div>

                </div>

            </section>
            </>
    );
};

export default Blogs;
