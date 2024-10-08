import React, { useState } from 'react';
import './Tooltip.css';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="tooltip-container"
    >
      {children}
      {visible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
