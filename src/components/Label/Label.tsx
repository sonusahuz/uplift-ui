import React from 'react';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default Label;
