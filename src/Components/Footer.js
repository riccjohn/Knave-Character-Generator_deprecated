import React from 'react';

const Footer = () => {
  return (
    <div className='footer flex row'>
      <p className='block'>
        Based on the fantasic RPG{' '}
        <a href='https://www.drivethrurpg.com/product/250888/Knave'>
          {'Knave'}
        </a>
        {' by '}
        <a href='https://www.youtube.com/watch?v=hVL4coIiHsE'>Ben Milton</a>
      </p>
      <p className='block'>
        Made with <span id='heart'>♥</span> in Madison, WI
      </p>
    </div>
  );
};

export default Footer;
