import { useState } from 'react';
import { ToastCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button, Toast } from '../components';

const toastProps = [
  {
    prop: 'message',
    type: 'string',
    description: 'The message to be displayed in the toast.',
  },
  {
    prop: 'onClose',
    type: 'void',
    description: 'Function to call when the toast is closed.',
  },
];

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
        <p className="mb-4 ">
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
        <div>
          <ToastCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={toastProps} />
      </section>
    </div>
  );
};

export default ToastDemo;
