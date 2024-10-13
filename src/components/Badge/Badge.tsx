import React from 'react';
import './Badge.css'; // Import the CSS file

type BadgeSize = 'small' | 'medium' | 'large';
type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  size = 'medium',
  variant = 'default',
  ...rest
}) => {
  const getBadgeClasses = () => {
    const baseClasses = 'badge font-medium';
    const sizeClasses: Record<BadgeSize, string> = {
      small: 'badge--small',
      medium: 'badge--medium',
      large: 'badge--large',
    };

    const variantClasses: Record<BadgeVariant, string> = {
      default: 'badge--default',
      primary: 'badge--primary',
      secondary: 'badge--secondary',
      destructive: 'badge--destructive',
      outline: 'badge--outline',
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;
  };

  return (
    <span className={getBadgeClasses()} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
