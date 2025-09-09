import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <img 
        src="/src/assets/JohnWilson5.jpg" 
        alt="Professional portrait" 
        className="about-me-photo"
      />
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          My name is John Wilson. I'm specializing in Full Stack Development and currently in my 
          5th and final trimester at Atlas. My favorite technologies to work with include 
          React, JavaScript, Node.js, and Python.
        </p>
        <p>
          After completing my studies, I aim to become a project manager 
          at a company that values innovation and continuous learning.
        </p>
        <p>
          Outside of school and work, I enjoy reading, cooking, and hanging out with my kids. 
          I'm also passionate about learning.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;