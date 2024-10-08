import NextPrevButton from '../ui/NextPrevButton';
import { Breadcrumb } from 'uplift-ui';

const BreadcrumbsDemo = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Library', href: '/library' },
    { label: 'Data', href: '/library/data' },
  ];

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Breadcrumb </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Breadcrumb</strong> component helps users navigate through
          the hierarchy of pages. It shows the current page's location within
          the context of the site structure.
        </p>
      </section>

      {/* Demo of Breadcrumb */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Breadcrumb</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Breadcrumb } from 'uplift-ui';

const MyComponent = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Library', href: '/library' },
    { label: 'Data', href: '/library/data' },
  ];

  return <Breadcrumb items={items} />;
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
                <td className="px-4 py-2 border">items</td>
                <td className="px-4 py-2 border">{`{ label: string, href: string }[]`}</td>
                <td className="px-4 py-2 border">
                  An array of objects representing breadcrumb items.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Button"
          prev="Badge"
          nextPath="button"
          prevPath="badge"
        />
      </div>
    </div>
  );
};

export default BreadcrumbsDemo;
