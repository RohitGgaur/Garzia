import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Add slick theme for styling
import profilePic from "../../assenst/profileimage.jpg"; // Placeholder image

const Card = () => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const feedbacks = [
    { name: "John Doe", feedback: "Great product and excellent service!", image: profilePic },
    { name: "Jane Smith", feedback: "Very satisfied with the quality.", image: profilePic },
    { name: "Michael Johnson", feedback: "Fast shipping and great customer support.", image: profilePic },
    { name: "Emily White", feedback: "Product is as described, will buy again!", image: profilePic },
    { name: "David Brown", feedback: "Amazing experience, highly recommend!", image: profilePic },
    { name: "Sophia Green", feedback: "I love the product and it arrived on time.", image: profilePic },
    { name: "Chris Blue", feedback: "Very responsive team and helpful.", image: profilePic },
    { name: "Linda Grey", feedback: "The quality exceeded my expectations.", image: profilePic },
    { name: "Robert Yellow", feedback: "Great value for the money!", image: profilePic },
    { name: "Laura Pink", feedback: "Top-notch service, will come back for more.", image: profilePic },
  ];

  return (
    <>
      <div className="box alice-regular" style={{ marginTop: '120px' }}data-aos="fade-up" data-aos-duration="700">
        <div className="box1">
          <div className="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <b style={{ fontSize: '24px' }}>Customer Feedback</b>
            <p>See what our customers are saying about us.</p>
          </div>
          
          <Slider {...settings} style={{ marginTop: '40px', padding: '0 20px' }}>
            {feedbacks.map((feedback, index) => (
              <div key={index} style={{ padding: '10px', margin: '0px 15px' }}> {/* Added margin here */}
                <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', alignItems: 'center',width:"620px",height:"100px" }}>
                  
                  {/* Circular Image */}
                  <img 
                    src={feedback.image} 
                    alt={`Profile ${index + 1}`} 
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      border: '2px solid #ddd',
                      marginRight: '15px'
                    }} 
                  />
                  
                  {/* Feedback Content */}
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px' }}>{feedback.name}</h4>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#555' }}>"{feedback.feedback}"</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Card;
