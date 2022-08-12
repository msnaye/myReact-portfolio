import React from 'react';
import '../../styles/About.css';
import Avatar from '@mui/material/Avatar';


function About() {
  return (
    <section className="mytag">
      <h1 className="about-me">About Me</h1>
      <div className="bgC">
        <h2 className='me'>Hi, my name is </h2>
        <h1 className='me'>Mayra Ibarra</h1>

        <Avatar
          alt="MI"
          src="../../assets/PhotoList/propic.png"
          sx={{ width: 100, height: 100, margin: 20 }}
        />
        <p className='myName'>
          I provide digital products that are creative and user-friendly.
          My services are perfect for small businesses and for personal use.
          I design and create realiable websites that will strengthen your standards
          and online visibility.
        </p>
      </div>
    </section>
  );
}

export default About;
