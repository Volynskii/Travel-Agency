import React,{useState} from 'react';
import SimpleCarousel from "./simpleCarousel";
import imgProd1 from '../images/product-1.jpg';
import imgProd2 from '../images/product-2.jpg';
import imgProd3 from '../images/product-3.JPG';
import imgProd4 from '../images/product-4.JPG';
import imgProd5 from '../images/product-5.jpg';
import imgProd6 from '../images/product-6.jpg';

const Shop = () => {

    const [activeItem,setCurrentActiveItem] = useState(0)
    return (
       <>
           <section className="shop" id="shop">

               <h1 className="heading">featured products</h1>

               <div className="swiper product-slider">

                   <div className="swiper-wrapper">



                       <SimpleCarousel
                           show={4}
                           infiniteLoop
                           setCurrentActiveItem={setCurrentActiveItem}
                           spaceBetween={20}
                       >
                       <div  className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd1} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd2} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd3} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd4} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd5} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
                               </div>
                           </div>
                       </div>

                       <div className="swiper-slide slide">
                           <div className="image">
                               <img src={imgProd6} alt=""/>
                                   <div className="icons">
                                       <a href="#" className="fas fa-shopping-cart"></a>
                                       <a href="#" className="fas fa-eye"></a>
                                       <a href="#" className="fas fa-share"></a>
                                   </div>
                           </div>
                           <div className="content">
                               <h3>survival kits</h3>
                               <div className="price"> $5.00 - $25.00</div>
                               <div className="stars">
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star"></i>
                                   <i className="fas fa-star-half-alt"></i>
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

export default Shop;
