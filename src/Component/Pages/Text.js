import React from 'react';
import "./text.css"
import img1 from "../../assenst/Garzia1.png";
import img2 from "../../assenst/Garzia2.png";
import img3 from "../../assenst/Garzia3.png";
const Text = () => {
    const images = [
        { src: img1, button: "Click Here 1" },
        { src: img2, button: "Click Here 2" },
        { src: img3, button: "Click Here 3" }
    ];

    return (
        <>
           <div className="image-container1" data-aos="fade-up" data-aos-duration="500">
            {images.map((image, index) => (
                <div className="image-card1" key={index}>
                    <img src={image.src} alt={`img${index + 1}`} className="image" style={{width:"400px",height:"500px"}}/>
                    <div className="overlay alice-regular">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, distinctio.</p>
                        <button className="overlay-button">{image.button}</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Text;
