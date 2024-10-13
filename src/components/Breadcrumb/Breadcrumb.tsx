import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

type BreadcrumbProps = {
  items: { label: string; href: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          <Link to={item.href}>{item.label}</Link>
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
