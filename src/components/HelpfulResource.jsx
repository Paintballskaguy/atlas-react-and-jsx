import React from 'react';
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      <span className="resource-label">{label}</span>
      <div className="resource-actions">
        <OpenLink link={link} />
        <CopyLink link={link} />
      </div>
    </div>
  );
};

export default HelpfulResource;