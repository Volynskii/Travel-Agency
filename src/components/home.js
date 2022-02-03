import React,{useState} from 'react';
import homeBg1 from "../images/home-bg-1.jpg"
import homeBg2 from "../images/home-bg-2.jpg"
import homeBg3 from "../images/home-bg-3.jpg"
import SimpleCarousel from "./simpleCarousel";


const Home = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(2);
    return (
       <>
           <section className="home" id="home">

               <div className="swiper home-slider">

                   <div className="swiper-wrapper">


                       <SimpleCarousel
                           show={1}
                           infiniteLoop
                           setCurrentActiveItem={setCurrentActiveItem}
                           dots
                       >
                       <div className="swiper-slide" >
                           <div  className="box" style={{ backgroundImage: `url(${homeBg1})`}}>
                               <div className="content">
                                   <span>never stop</span>
                                   <h3>exploring</h3>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias
                                       soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                   <a href="#" className="btn">get started</a>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide">
                           <div className="box second" style={{ backgroundImage: `url(${homeBg2})`}}>
                               <div className="content">
                                   <span>make tour</span>
                                   <h3>amazing</h3>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias
                                       soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                   <a href="#" className="btn">get started</a>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide">
                           <div className="box" style={{ backgroundImage: `url(${homeBg3})`}}>
                               <div className="content">
                                   <span>explore the</span>
                                   <h3>new world</h3>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias
                                       soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                   <a href="#" className="btn">get started</a>
                               </div>
                           </div>
                       </div>
                       </SimpleCarousel>

                   </div>

                   <div className="swiper-button-next"></div>
                   <div className="swiper-button-prev"></div>

               </div>

           </section>
           </>
    );
};

export default Home;
