import { useState } from 'react';
import NextPrevButton from '../ui/NextPrevButton';
import { AlertDialog, Button } from 'uplift-ui';

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
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Alert Dialog </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Alert Dialog</strong> component is used to show critical
          information and actions to the user. It's primarily used for
          confirmations or alerts where user action is required.
        </p>
      </section>

      {/* Demo of AlertDialog */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Button onClick={() => setIsOpen(true)} width="300px">
            Show Dialog
          </Button>
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
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React, { useState } from 'react';
import { Button, AlertDialog } from 'uplift-ui'; 
const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    alert('Confirmed!');
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>
      <AlertDialog
        isOpen={isOpen}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default MyComponent;
`}
            </code>
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Prop</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">isOpen</td>
                <td className="px-4 py-2 border">boolean</td>
                <td className="px-4 py-2 border">
                  Controls whether the dialog is open or not.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">title</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The title of the alert dialog.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">description</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  A brief description of the action.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onCancel</td>
                <td className="px-4 py-2 border">void</td>
                <td className="px-4 py-2 border">
                  Callback function for the Cancel button.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onConfirm</td>
                <td className="px-4 py-2 border">void</td>
                <td className="px-4 py-2 border">
                  Callback function for the Confirm button.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Avatar"
          prev="Alert"
          nextPath="avatar"
          prevPath="alert"
        />
      </div>
    </div>
  );
};

export default AlertDialogDemo;
