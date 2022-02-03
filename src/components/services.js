import React from 'react';
import imgServ1 from '../images/serv-1.png';
import imgServ2 from '../images/serv-2.png';
import imgServ3 from '../images/serv-3.png';
import imgServ4 from '../images/serv-4.png';
import imgServ5 from '../images/serv-5.png';
import imgServ6 from '../images/serv-6.png';

const Services = () => {
    return (
        <>
            <section className="services">

                <h1 className="heading"> what we offer </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={imgServ1} alt=""/>
                            <h3>complete guide</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={imgServ2} alt=""/>
                            <h3>custom packages</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={imgServ3} alt=""/>
                            <h3>family trips</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={imgServ4} alt=""/>
                            <h3>train guides</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={imgServ5} alt=""/>
                            <h3>adventure trail</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                    <div className="box">
                        <img src={imgServ6} alt=""/>
                            <h3>various adventures</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                            <a href="#" className="btn">read more</a>
                    </div>

                </div>

            </section>

        </>
    );
};

export default Services;
