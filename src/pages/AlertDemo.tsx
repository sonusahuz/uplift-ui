import { Alert } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

const variants = [
  {
    id: '1',
    title: 'Success',
    description: 'This is a success alert.',
    variant: 'success',
  },
  {
    id: '2',
    title: 'Error',
    description: 'This is a error alert.',
    variant: 'error',
  },
  {
    id: '3',
    title: 'Warning',
    description: 'This is a warning alert.',
    variant: 'warning',
  },
  {
    id: '4',
    title: 'Info',
    description: 'This is a info alert.',
    variant: 'info',
  },
];
const AlertDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Alert</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Alert</strong> component is used to display important
          messages to the user. It comes in various styles and can be used for
          warnings, errors, success messages, and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <Alert variant={item.variant}>{item.description}</Alert>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is how to use the <strong>Alert</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Alert } from 'uplift-ui';

const MyComponent = () => {
  return (
    <div>
      <Alert variant="success">This is a success alert.</Alert>
      <Alert variant="error">This is an error alert.</Alert>
      <Alert variant="warning">This is a warning alert.</Alert>
      <Alert variant="info">This is an info alert.</Alert>
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
                <td className="px-4 py-2 border">variant</td>
                <td className="px-4 py-2 border">
                  "success" | "error" | "warning" | "info"
                </td>
                <td className="px-4 py-2 border">
                  Defines the style of the alert based on the context (success,
                  error, etc.).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">ReactNode</td>
                <td className="px-4 py-2 border">The content of the alert.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Alert Dialog"
          prev="Accordion"
          nextPath="alert-dialog"
          prevPath="accordion"
        />
      </div>
    </div>
  );
};

export default AlertDemo;
