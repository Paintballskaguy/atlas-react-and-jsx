import React from 'react';
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
      <img src="/src/assets/open.svg" alt="Open link" />
    </a>
  );
};

export default OpenLink;