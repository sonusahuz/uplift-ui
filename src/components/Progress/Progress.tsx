import React from 'react';
import './Progress.css'; // Import the CSS file

interface ProgressProps {
  value: number; // Current value of the progress
  max: number; // Maximum value of the progress
  size?: 'small' | 'medium' | 'large'; // Size of the progress bar
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'; // Color of the progress bar
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max,
  size = 'medium',
  color = 'primary',
}) => {
  // Calculate the percentage of progress
  const percentage = Math.min((value / max) * 100, 100); // Clamp to a maximum of 100

  // Combine class names for the progress bar
  const progressBarClasses = `progress-bar ${size} ${color}`;

  return (
    <div className="progress-container">
      <div className={progressBarClasses} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default Progress;
