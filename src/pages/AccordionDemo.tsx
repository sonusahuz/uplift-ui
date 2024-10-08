import { Accordion } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

const AccordionDemo = () => {
  const accordionItems = [
    {
      title: 'What is a Modal?',
      variant: 'default',
      type: 'Default',
      content:
        'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
    },
    {
      title: 'What is an Accordion?',
      variant: 'detailed',
      type: 'Detailed',
      content:
        'An accordion is a UI component that allows users to expand and collapse sections of content. It helps to save space and keep the interface clean.',
    },
    {
      title: 'What is an Accordion?',
      variant: 'underline',
      type: 'Underline',
      content:
        'An accordion is a UI component that allows users to expand and collapse sections of content. It helps to save space and keep the interface clean.',
    },
  ];

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Accordion</h1>
      {/* Accordion Section */}
      <section>
        <p className="mb-4 text-lg">
          The <strong>Accordion</strong> component allows users to expand and
          collapse sections of content to show or hide information.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">Variants</h2>
          {accordionItems.map((item) => (
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-semibold">{item.type}</h3>
              <Accordion
                title={item.title}
                content={<p>{item.content}</p>}
                variant={item.variant}
              />
            </div>
          ))}
        </section>
        <h3 className="mt-6 mb-2 text-2xl font-semibold">Usage</h3>
        <p className="mb-4">
          Here is how to use the <strong>Accordion</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Accordion } from 'uplift-ui';
const accordionItems = [
    {
      title: 'What is a Modal?',
      variant: 'basic',
      type: 'Basic',
      content:
        'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
    },
    {
      title: 'What is an Accordion?',
      variant: 'detailed',
      type: 'Detailed',
      content:
        'An accordion is a UI component that allows users to expand and collapse sections of content. It helps to save space and keep the interface clean.',
    },
];
  
const MyComponent = () => {
  return (
    <div>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
          {accordionItems.map((item) => (
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-semibold">{item.type}</h3>
              <AccordionItem
                title={item.title}
                content={<p>{item.content}</p>}
                variant={item.variant}
              />
            </div>
          ))}
        </section>
    </div>
  );
};

export default MyComponent;`}
            </code>
          </pre>
        </div>
      </section>

      <section className="my-8">
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
                <td className="px-4 py-2 border">title</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The text displayed as the title of the accordion.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">content</td>
                <td className="px-4 py-2 border">ReactNode</td>
                <td className="px-4 py-2 border">
                  The content displayed when the accordion is expanded. Can
                  include any valid React nodes (text, components, etc.).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">variant</td>
                <td className="px-4 py-2 border">"basic" | "detailed"</td>
                <td className="px-4 py-2 border">
                  Defines the visual style of the accordion. "basic" provides a
                  simple look, while "detailed" adds more styling and features.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="my-8">
        <NextPrevButton
          next="Alert"
          prev="Installation"
          nextPath="alert"
          prevPath="installation"
        />
      </div>
    </div>
  );
};

export default AccordionDemo;
