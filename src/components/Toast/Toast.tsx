import React from 'react';
import './Toast.css';
import { X } from 'lucide-react';

type ToastProps = {
  message: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="toast">
      {message}
      <X size={23} onClick={onClose} />
    </div>
  );
};

export default Toast;
