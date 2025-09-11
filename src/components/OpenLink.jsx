import React from 'react';
import opimg from '../assets/open.svg';

const OpenLink = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
      className="open-link"
    >
      <img src={ opimg } alt="Open link" />
    </a>
  );
};

export default OpenLink;