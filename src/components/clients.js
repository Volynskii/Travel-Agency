import React,{useState} from 'react';
import imgLogo1 from "../images/client-logo-1.png";
import imgLogo2 from "../images/client-logo-2.png";
import imgLogo3 from "../images/client-logo-3.png";
import imgLogo4 from "../images/client-logo-4.png";
import SimpleCarousel from "./simpleCarousel";

const Clients = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(1);
    return (

        <>
            <section className="clients">

                <div className="swiper clients-slider">
                    <div className="swiper-wrapper">
                        <SimpleCarousel
                            show={3}
                            infiniteLoop
                            setCurrentActiveItem={setCurrentActiveItem}
                        >
                        <div className="swiper-slide silde"><img src={imgLogo1} alt=""/></div>
                        <div className="swiper-slide silde"><img src={imgLogo2} alt=""/></div>
                        <div className="swiper-slide silde"><img src={imgLogo3} alt=""/></div>
                        <div className="swiper-slide silde"><img src={imgLogo4} alt=""/></div>
                        </SimpleCarousel>
                    </div>
                </div>

            </section>
            </>
    );
};

export default Clients;
