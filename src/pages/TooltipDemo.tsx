import NextPrevButton from '../ui/NextPrevButton';
import { Button, Tooltip } from 'uplift-ui';
const TooltipDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Tooltip</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Tooltip</strong> component provides additional information
          when hovering over an element.
        </p>
      </section>

      {/* Demo of Tooltip Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto mb-4 border rounded">
          <div className="flex items-center space-x-4">
            <Tooltip text="This is a tooltip!">
              <Button>Hover over me</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Tooltip</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Tooltip } from 'uplift-ui';

const MyComponent = () => {
  return (
    <Tooltip text="This is a tooltip!">
        <Button>Hover over me</Button>
    </Tooltip>
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
                <td className="px-4 py-2 border">text</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The text to be displayed in the tooltip.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">React.ReactNode</td>
                <td className="px-4 py-2 border">
                  The element(s) that will trigger the tooltip on hover.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Home"
          prev="Toast"
          nextPath="/"
          prevPath="toast"
        />
      </div>
    </div>
  );
};

export default TooltipDemo;
