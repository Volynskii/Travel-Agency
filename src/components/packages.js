import React from 'react';
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";

const Packages = () => {
    return (
           <>
               <section className="packages" id="packages">

                   <h1 className="heading">popular packages</h1>

                   <div className="box-container">

                       <div className="box">
                           <div className="image">
                               <img src={img1} alt=""/>
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                       <div className="box">
                           <div className="image">
                               <img src={img2} alt=""/>
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                       <div className="box">
                           <div className="image">
                               <img src={img3} alt=""/>
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                       <div className="box">
                           <div className="image">
                               <img src={img4} alt=""/>
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                       <div className="box">
                           <div className="image">
                               <img src={img5} alt=""/>
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                       <div className="box">
                           <div className="image">
                               <img src={img6} />
                           </div>
                           <div className="content">
                               <h3>featured tour package</h3>
                               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eos.</p>
                               <div className="price">$250 - $450</div>
                               <a href="#" className="btn">explore now</a>
                           </div>
                       </div>

                   </div>

               </section>
           </>
    );
};

export default Packages;
