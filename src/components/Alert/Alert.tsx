import React from 'react';
import './Alert.css'; // Import the CSS file

type AlertProps = {
  variant?:
    | 'default'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | string;
  children: React.ReactNode; // Content to display
  onClose?: () => void; // Function to close the alert
  width?: string; // Width of the alert
};

const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  children,
  onClose,
  width,
}) => {
  const alertClasses = `alert ${variant} `;

  return (
    <div className={alertClasses} style={{ width }}>
      <span>{children}</span>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times; {/* Close button */}
        </button>
      )}
    </div>
  );
};

export default Alert;
