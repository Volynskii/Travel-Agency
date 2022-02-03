import React,{useState,useEffect} from 'react';
import _ from "lodash"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuClassName = isMenuOpen ? 'active' : '';
    const headerClassName = isMenuOpen ? '': 'active';
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchClassName = isSearchOpen ? 'active' : '';
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    };


    useEffect(() => {
        const throttledCount = _.throttle(() => {
            if(isMenuOpen) {
                setIsMenuOpen(false);
            }
        }, 200);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);
    });


    return (
        <>
            <header className="header active">

                <a href="#" className="logo"> <i className="fas fa-hiking"/> travel. </a>

                <nav className={`navbar ${menuClassName}`}>
                    <div onClick={toggleMenu} id="nav-close" className="fas fa-times"/>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#shop">shop</a>
                    <a href="#packages">packages</a>
                    <a href="#reviews">reviews</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div onClick={toggleMenu} id="menu-btn" className="fas fa-bars"/>
                    <a href="#" className="fas fa-shopping-cart"/>
                    <div onClick={toggleSearch} id="search-btn" className="fas fa-search"/>
                </div>


                <div className={`search-form ${searchClassName}`}>

                    <div onClick={toggleSearch} id="close-search" className="fas fa-times"/>

                    <form action="">
                        <input type="search" name="" placeholder="search here..." id="search-box"/>
                        <label htmlFor="search-box" className="fas fa-search"/>
                    </form>
                </div>


            </header>
        </>
    );
};

export default Header;
