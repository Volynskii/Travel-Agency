import React from 'react';
import imgReview1 from "../images/pic-1.png";
import imgReview2 from "../images/pic-2.png";
import imgReview3 from "../images/pic-3.png";
import imgReview4 from "../images/pic-4.png";
import imgReview5 from "../images/pic-5.png";
import imgReview6 from "../images/pic-6.png";


const Reviews = () => {
    return (
        <>
            <section className="reviews" id="reviews">

                <h1 className="heading">client's reviews</h1>

                <div className="swiper review-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview1} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview2} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview3} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview4} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview5} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
                                laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat
                                obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                            <div className="user">
                                <img src={imgReview6} alt=""/>
                                    <div className="info">
                                        <h3>john deo</h3>
                                        <span>designer</span>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Reviews;
