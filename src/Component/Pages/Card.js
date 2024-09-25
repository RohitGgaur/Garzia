import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from "../../assenst/building.png" // Corrected path
import img2 from "../../assenst/project.png" // Corrected path
import img3 from "../../assenst/team.png" // Corrected path
import './Card.css';
// img address D:\graziaDesign\graziadesign\src\assenst\building.png
const Card = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  
  // For checking if counting is completed
  const [projectDone, setProjectDone] = useState(false);
  const [clientDone, setClientDone] = useState(false);
  const [teamDone, setTeamDone] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const resetCounters = () => {
    setProjectCount(0);
    setClientCount(0);
    setTeamCount(0);
    setProjectDone(false);
    setClientDone(false);
    setTeamDone(false);
  };

  useEffect(() => {
    if (inView) {
      resetCounters();

      let projectInterval = setInterval(() => {
        setProjectCount((prev) => {
          if (prev < 30) {
            return prev + 1;
          } else {
            clearInterval(projectInterval);
            setProjectDone(true); // Set done flag to true
            return 30;
          }
        });
      }, 40);

      let clientInterval = setInterval(() => {
        setClientCount((prev) => {
          if (prev < 300) {
            return prev + 10;
          } else {
            clearInterval(clientInterval);
            setClientDone(true); // Set done flag to true
            return 300;
          }
        });
      }, 40);

      let teamInterval = setInterval(() => {
        setTeamCount((prev) => {
          if (prev < 50) {
            return prev + 2;
          } else {
            clearInterval(teamInterval);
            setTeamDone(true); // Set done flag to true
            return 50;
          }
        });
      }, 40);

      return () => {
        clearInterval(projectInterval);
        clearInterval(clientInterval);
        clearInterval(teamInterval);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="counter-card">
      <div className="card-section mt-3">
        <img src={img1} alt="" style={{width:"100px",height:"100px"}}/>
        <h2 style={{fontSize:"25px",fontWeight:"bold"}}>Project</h2>
        <p  className="projectDone"style={{color:'black'}}>
          {projectCount}{projectDone ? '+' : ''}
        </p>
      </div>
      <div className="card-section mt-3">
      <img src={img2} alt="" style={{width:"100px",height:"100px"}}/>
        <h2 style={{fontSize:"25px",fontWeight:"bold"}}>Client</h2>
        <p className="clientDone"style={{color:'black'}}>
          {clientCount}{clientDone ? '+' : ''}
        </p>
      </div>
      <div className="card-section mt-3">
      <img src={img3} alt="" style={{width:"100px",height:"100px"}}/>
        <h2 style={{fontSize:"25px",fontWeight:"bold"}}>Team</h2>
        <p className="teamDone"style={{color:'black'}}>
          {teamCount}{teamDone ? '+' : ''}
        </p>
      </div>
    </div>
  );
};

export default Card;
