import React from 'react';
import categoryImg1 from '../images/category-1.jpg'
import categoryImg2 from '../images/category-2.jpg'
import categoryImg3 from '../images/category-3.jpg'
import categoryImg4 from '../images/category-4.jpg'

const Category = () => {
    return (
       <>
           <section className="category">

               <h1 className="heading">adventure idea!</h1>

               <div className="box-container">

                   <div className="box">
                       <img src={categoryImg1} alt=""/>
                           <h3>bungee jump</h3>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                           <a href="#" className="btn">read more</a>
                   </div>

                   <div className="box">
                       <img src={categoryImg2} alt=""/>
                           <h3>zip lines</h3>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                           <a href="#" className="btn">read more</a>
                   </div>

                   <div className="box">
                       <img src={categoryImg3} alt=""/>
                           <h3>Canoeing</h3>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                           <a href="#" className="btn">read more</a>
                   </div>

                   <div className="box">
                       <img src={categoryImg4} alt=""/>
                           <h3>kayaking</h3>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                           <a href="#" className="btn">read more</a>
                   </div>

               </div>

           </section>
           </>
    );
};

export default Category;
