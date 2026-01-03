import { NavLink } from "react-router-dom";
import "./Gallery.scss";
import { useEffect } from "react";

export default function Gallery() {
    function slidesPlugin(activeSlide = 4) {
        const slides = document.querySelectorAll(".gallery__slide");
        console.log(slides);
        slides[activeSlide].classList.add("active");

        for (const slide of slides) {
            slide.addEventListener("click", () => {
                clearActiveClasses();
                slide.classList.add("active");
            });
        }
        function clearActiveClasses() {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
        }
    }

    useEffect(() => {
        slidesPlugin(4);
    }, []);

    return (
        <div className="gallery">
            <div className="gallery__container">
                <div className="gallery__slide">
                    <h3>Ilia</h3>
                </div>
                <div className="gallery__slide">
                    <h3>Maria</h3>
                </div>
                <div className="gallery__slide">
                    <h3>Artem</h3>
                </div>
                <div className="gallery__slide">
                    <h3>Ivan</h3>
                </div>
                <div className="gallery__slide">
                    <h3>Irina</h3>
                </div>
            </div>
        </div>
    );
}
