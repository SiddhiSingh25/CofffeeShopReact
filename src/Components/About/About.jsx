import React, { useRef } from "react";
import AboutContent from "./AboutContent";
import AboutCoffeeeDetails from "./AboutCoffeeDetails";
import aboutBottom from "../../assets/aboutBottom.webp";

function About() {
    // Create a ref for the div element
    const shadowRef = useRef(null);

    // Function to add the shadow on hover
    const handleMouseOver = () => {
        if (shadowRef.current) {
            shadowRef.current.style.boxShadow = "0px 0px 20px 5px rgba(255, 255, 255, 0.7)";
        }
    };

    // Function to remove the shadow when the mouse leaves
    const handleMouseOut = () => {
        if (shadowRef.current) {
            shadowRef.current.style.boxShadow = "none";
        }
    };

    return (
        <>
            <div className="min-h-[150vh] w-full px-28">
                <AboutContent />
                <AboutCoffeeeDetails />
                <div
                    ref={shadowRef}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className="h-[50vh] w-full px-5 py-3 border-2 rounded-xl border-solid border-red-950 flex items-center mt-20 mb-20 justify-center bg-[#333D4B] transition-shadow duration-300"
                >
                    <div className="w-[55%] h-[55%] flex items-center justify-between flex-col">
                        <h1 className="mediumFont text-[7.2vh] text-center leading-[42px] text-[#FEFCF7]">
                            Quality means doing it right when no one is looking.
                        </h1>
                        <p className="text-[#FEFCF7] text-center">
                            Quality is critical to satisfying our customers and retaining your loyalty so they continue to buy from us in the future. Quality products make an important contribution to long-term revenue and profitability. They also enable us to charge and maintain higher prices.
                        </p>
                    </div>
                    <div
                        className="h-[90%] w-[40%] bg-cover bg-center rounded-xl ml-10 mb-28"
                        style={{ backgroundImage: `url(${aboutBottom})` }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default About;
