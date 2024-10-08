import React from 'react';
import './Checkbox.css'; // Import the CSS for styling

export type Size = 'small' | 'medium' | 'large' | string;
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | string;

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  size?: Size;
  color?: Color;
}

const Checkbox = ({
  checked,
  onChange,
  label,
  size = 'medium',
  color = 'primary',
  ...props
}: CheckboxProps) => {
  return (
    <label className={`checkbox-label ${size} ${color}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className="custom-checkbox"
      />
      <span className="checkmark"></span>
      {label && <span className="label-text">{label}</span>}
    </label>
  );
};

export default Checkbox;
