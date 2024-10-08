import { useState } from 'react';
import { Toast, Button } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

const ToastDemo = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Auto-hide after 3 seconds
  };

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Toast </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Toast</strong> component is used to display brief
          notifications to the user.
        </p>
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <div>
            <Button onClick={showToast}>Show Toast</Button>
          </div>
        </div>
      </section>

      {/* Demo of Toast Component */}
      <section className="mb-8">
        {toastVisible && (
          <Toast
            message="This is a toast notification!"
            onClose={() => setToastVisible(false)}
          />
        )}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Toast</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Toast } from 'uplift-ui';

const MyComponent = () => {
  const showToast = () => {
    // Logic to show toast
  };

  return (
    <Toast message="Hello, World!" onClose={() => {/* Logic to close toast */}} />
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
                <td className="px-4 py-2 border">message</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The message to be displayed in the toast.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onClose</td>
                <td className="px-4 py-2 border">void</td>
                <td className="px-4 py-2 border">
                  Function to call when the toast is closed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Tooltip"
          prev="Tabs"
          nextPath="tooltip"
          prevPath="tabs"
        />
      </div>
    </div>
  );
};

export default ToastDemo;
