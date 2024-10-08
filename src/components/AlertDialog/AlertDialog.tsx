import React from 'react';
import './AlertDialog.css'; // Import the CSS file
import Button from '../Button/Button';

type AlertDialogProps = {
  isOpen: boolean; // To control the modal visibility
  title: string; // Title of the alert dialog
  description: string; // Description of the alert dialog
  onCancel: () => void; // Function to call when Cancel is clicked
  onConfirm: () => void; // Function to call when OK is clicked
};

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  title,
  description,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null; // Render nothing if the dialog is not open

  return (
    <div className="overlay">
      <div className="alert-dialog">
        <h2 className="alert-dialog-title">{title}</h2>
        <p className="alert-dialog-description">{description}</p>
        <div className="alert-dialog-actions">
          <Button variant="outline" width="400px" onClick={onCancel}>
            Cancel
          </Button>
          <Button width="400px" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
