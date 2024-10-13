import React from 'react';
import './Button.css'; // Import the CSS file

// Define types for the size and variant props
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  width?: string; // Optional width for the button
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  width,
  ...props
}) => {
  const baseClasses = 'button font-medium'; // Base class for all buttons

  // Create size and variant classes using the defined types
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    destructive: 'button--destructive',
    outline: 'button--outline',
    link: 'button--link',
  };

  // Combine the classes based on the provided size and variant
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${width ? '' : ''}`;

  return (
    <button className={buttonClasses} style={{ width }} {...props}>
      {children}
    </button>
  );
};

export default Button;
