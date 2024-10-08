import React from 'react';
import './Button.css';

type ButtonProps = {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | string;
  size?: 'default' | 'small' | 'medium' | 'large' | string; // Updated size options
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  children,
  onClick,
  width,
}) => {
  const buttonClasses = `button ${variant} ${size} ${width || ''}`; // Ensure width is a string

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
