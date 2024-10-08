import { Tabs } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';
const TabsDemo = () => {
  const tabs = [
    { label: 'Tab 1', content: <p>This is the content for Tab 1.</p> },
    { label: 'Tab 2', content: <p>This is the content for Tab 2.</p> },
    { label: 'Tab 3', content: <p>This is the content for Tab 3.</p> },
  ];

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Tabs</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Tabs</strong> component is used to switch between
          different sections of content. It is a great way to organize large
          amounts of content in a small area, making it easier for users to
          navigate.
        </p>
      </section>

      {/* Demo of Tabs Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Tabs tabs={tabs} />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Tabs</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React, { useState } from 'react';
import { Tabs } from 'uplift-ui';

const MyComponent = () => {
  const tabs = [
    { label: 'Tab 1', content: <p>This is Tab 1 content.</p> },
    { label: 'Tab 2', content: <p>This is Tab 2 content.</p> },
    { label: 'Tab 3', content: <p>This is Tab 3 content.</p> },
  ];

  return <Tabs tabs={tabs} />;
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
                <td className="px-4 py-2 border">tabs</td>
                <td className="px-4 py-2 border">{`{ label: string, content: React.ReactNode }[]`}</td>
                <td className="px-4 py-2 border">
                  An array of objects representing each tab.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">activeTab</td>
                <td className="px-4 py-2 border">number</td>
                <td className="px-4 py-2 border">
                  The index of the active tab (optional).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Next and Previous Navigation */}
      <div>
        <NextPrevButton
          next="Toast"
          prev="Spinner"
          nextPath="toast"
          prevPath="spinner"
        />
      </div>
    </div>
  );
};

export default TabsDemo;
