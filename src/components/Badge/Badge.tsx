import React from 'react';
import './Badge.css'; // Import the CSS file

type BadgeProps = {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | string;
  size?: 'default' | 'small' | 'medium' | 'large' | string; // Size options
  children: React.ReactNode;
  type?: 'rounded' | 'circle' | string;
};

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'default',
  children,
  type = 'circle',
}) => {
  const badgeClasses = `badge ${variant} ${size} ${type}`;

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
