import React from 'react';
import './Spinner.css'; // Importing the CSS file for styles

type SpinnerProps = {
  colorVariant?: 'blue' | 'red' | 'green' | 'gray' | 'purple' | string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
};

const Spinner: React.FC<SpinnerProps> = ({
  colorVariant = 'black', // Default color as black
  size = 'small',
}) => {
  return <span className={`loader ${colorVariant} ${size}`}></span>;
};

export default Spinner;
