import React from 'react';
import './Spinner.css'; // Importing the CSS file for styles

type SpinnerSize = 'small' | 'medium' | 'large' | 'xlarge';
type SpinnerColorVariant = 'blue' | 'red' | 'green' | 'gray' | 'purple';

type SpinnerProps = {
  colorVariant?: SpinnerColorVariant;
  size?: SpinnerSize;
};

const Spinner: React.FC<SpinnerProps> = ({
  colorVariant = 'black', // Default color as black
  size = 'small',
}) => {
  return <span className={`loader ${colorVariant} ${size}`}></span>;
};

export default Spinner;
