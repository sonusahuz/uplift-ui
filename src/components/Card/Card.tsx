import React from 'react';
import './Card.css'; // Import the CSS file

type CardProps = {
  children: React.ReactNode;
  width: string;
  height?: string;
};

const Card: React.FC<CardProps> & {
  Header: React.FC<{ children: React.ReactNode }>;
  Title: React.FC<{ children: React.ReactNode }>;
  Description: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
} = ({ children, width = '400px', height = 'auto' }) => {
  return (
    <div className={`card`} style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

// Subcomponents
Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Title = ({ children }) => <h3 className="card-title">{children}</h3>;
Card.Description = ({ children }) => (
  <p className="card-description">{children}</p>
);
Card.Content = ({ children }) => <div className="card-content">{children}</div>;
Card.Footer = ({ children }) => <div className="card-footer">{children}</div>;

export default Card;
