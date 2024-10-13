import { useState } from 'react';
import { AlertDialogCode } from '../ui/Code';
import { PropTable } from '../ui';
import { AlertDialog, Button } from '../components';

const alertDialogPropsData = [
  {
    prop: 'isOpen',
    type: 'boolean',
    description: 'Controls whether the dialog is open or not.',
  },
  {
    prop: 'title',
    type: 'string',
    description: 'The title of the alert dialog.',
  },
  {
    prop: 'description',
    type: 'string',
    description: 'A brief description of the action.',
  },
  {
    prop: 'onCancel',
    type: '() => void',
    description: 'Callback function for the Cancel button.',
  },
  {
    prop: 'onConfirm',
    type: '() => void',
    description: 'Callback function for the Confirm button.',
  },
];

const AlertDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handlers for dialog actions
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    alert('Confirmed!');
  };

  return (
    <div className="p-4 ">
      <h1 className="mb-2 text-3xl font-bold">Alert Dialog </h1>

      <section className="mb-8">
        <p className="mb-4">
          The <strong>Alert Dialog</strong> component is used to show critical
          information and actions to the user. It's primarily used for
          confirmations or alerts where user action is required.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>
        </div>

        <AlertDialog
          isOpen={isOpen}
          title="Are you sure want to to delete this item?"
          description="Are you sure you want to delete this item? This action cannot be undone."
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>AlertDialog</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <AlertDialogCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={alertDialogPropsData} />
      </section>
    </div>
  );
};

export default AlertDialogDemo;
