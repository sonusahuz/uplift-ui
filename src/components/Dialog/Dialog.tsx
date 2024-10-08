import React from 'react';
import './Dialog.css';
import { X } from 'lucide-react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  description?: string;
  title: string;
  width?: string;
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  description,
  width = '400px', // Default width for the modal
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width }}>
        <div className="modal-header">
          <h1 className="modal-title">{title}</h1>
          <X onClick={onClose} className="modal-close" />
        </div>
        <div className="modal-body">
          <p className="modal-description">{description}</p>
          <div className="modal-children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
