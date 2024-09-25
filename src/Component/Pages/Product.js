import React from 'react';
import "./product.css";
import img1 from "../../assenst/main1.jpg";
import img2 from "../../assenst/main4.jpg";
import img3 from "../../assenst/main6.jpg";
import img4 from "../../assenst/main7.jpg";
import img5 from "../../assenst/main8.jpg";
import img6 from "../../assenst/main2.jpg";

const Product = () => {
  // Array of objects with image URLs and corresponding texts
  const images = [
    { src: img1, text: "Bathroom" },
    { src: img2, text: "Kitchen" },
    { src: img3, text: "Stairs" },
    { src: img4, text: "Ground Floor" },
    { src: img5, text: "First Floor" },
    { src: img6, text: "Second Floor" },
  ];

  return (
    <>
      <div data-aos="zoom-in">
  <div className="image-grid" data-aos="fade-up" data-aos-duration="1000" style={{ marginTop: "60px" }}>
    {images.map((item, index) => (
      <div className="image-card" key={index}>
        <div className="image-container">
          <img src={item.src} alt={`Image ${index + 1}`} />
          <div className="image-text-overlay">
            <p>{item.text}</p> {/* Display different text below each image */}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="button-1" style={{ position: "relative", marginLeft: "620px", marginBottom: "20px" }}>
        <button style={{ height: "40px", width: "130px",border:"1px solid black" }}>MORE</button>
      </div>
    </>
  );
}

export default Product;
