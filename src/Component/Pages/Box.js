// Box.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./box.css";
import img from "../../assenst/main.jpg"


const Box = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Changed to 1 for better control
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand',
  };

 

  return (
    <>
     <div className="row"style={{backgroundColor:"#fafafa",marginTop:"80px", padding:"4%" }}>
      <div className="col">
      <div data-aos="fade-right">
        <img src={img} alt="" style={{width:"500px",height:"350px",marginLeft:"30px"}}/>
        </div>
      </div>
     
      <div className="col alice-regular"style={{marginTop:"30px",marginRight:"30px"}}>
      <div data-aos="fade-left">
        <p style={{fontWeight:"bold",fontSize:"30px",marginLeft:"19px"}}>Where Quality Flooring Meets Impeccable Service.</p>
        <p style={{marginTop:"20px",marginLeft:"19px",justifyContent:"center",alignItems:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla recusandae. Repudiandae iusto ducimus ad id et cum provident blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla recusandae. Repudiandae iusto ducimus ad id et cum provident blanditiis!</p>
        <button style={{margin:"20px",border:"1px solid black",height:"50px",width:"150px",marginLeft:"26px",marginTop:"46px"}}>Read More</button>
        </div>
      </div>
      
     </div>
    </>
  );
};

export default Box;
