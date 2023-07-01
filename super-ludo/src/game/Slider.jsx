import "./Slider.css"
import { useState } from "react";

const Slider = ({instructions, colours}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: `${colours[currentIndex][1]}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "70px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "70px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    }

    const goToPrevius = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? instructions.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === instructions.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div style={sliderStyles}>
            <div style={slideStyles}>
                <div className="instruction-container">
                    <h1 className={colours[currentIndex][0]}>{instructions[currentIndex][0]}</h1>
                    <p className={colours[currentIndex][0]}>{instructions[currentIndex][1]}</p>
                </div>
                <div style={leftArrowStyles} onClick={goToPrevius}>⇤</div>
                <div style={rightArrowStyles} onClick={goToNext}>⇥</div>
            </div>
        </div>
    );
};

export default Slider;