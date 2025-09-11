import React from 'react';
import { useState } from 'react';
import copyimg from '../assets/copy.svg';

const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="copy-link-container">
      <img 
        src={copyimg}
        alt="Copy link" 
        className="copy"
        onClick={handleCopy}
      />
      {copied && <span className="copy-tooltip">Copied!</span>}
    </div>
  );
};

export default CopyLink;