import React, { useEffect, useState } from 'react'
 import './carousel.scss'

const SimpleCarousel = (props) => {

    const {children, show, infiniteLoop, setCurrentActiveItem, dots} = props;

    const MOBILE_WIDTH = 770;
    const [isMobileWidth,setIsMobileWidth] = useState(window.innerWidth <= MOBILE_WIDTH);

    useEffect(() => {
        window.addEventListener('resize',() => {
            if (window.innerWidth <= MOBILE_WIDTH) {
               setIsMobileWidth(true)
            } else setIsMobileWidth(false)
        })
    });

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)

    useEffect(() => {
        setCurrentActiveItem(currentIndex - 2);
    },[currentIndex,setCurrentActiveItem]);

    const [length, setLength] = useState(children.length)

    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex > 0) &&
                    <button onClick={prev} className="left-arrow">

                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{
                            transform: `translateX(-${currentIndex * 100 / (isMobileWidth ? 1: show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                            // marginRight:`${spaceBetween}px`,
                            // paddingRight:`${spaceBetween}px`,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex < (length - show)) &&
                    <button onClick={next} className="right-arrow">

                    </button>
                }
                {dots  && (
                    <div className="dots">
                    {Array.from({length:children.length}).map((item,index) => {
                        const activeItem = currentIndex - 1 === index;
                        const className = activeItem ?'active': '';
                        return (
                            <ul className={`${className}`} key={index}/>
                        )
                    })}
                    </div>
                    )}
            </div>
        </div>
    )
}

export default SimpleCarousel;
