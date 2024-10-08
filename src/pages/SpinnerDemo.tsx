import NextPrevButton from '../ui/NextPrevButton';
import { Spinner } from 'uplift-ui';

const spinner = [
  {
    id: '1',
    title: 'Default',
    variant: 'default',
    size: 'default',
    sizeTitle: 'Default',
  },
  {
    id: '2',
    title: 'Blue',
    variant: 'blue',
    size: 'small',
    sizeTitle: 'Small',
  },
  {
    id: '3',
    title: 'Gray',
    variant: 'gray',
    size: 'medium',
    sizeTitle: 'Medium',
  },
  {
    id: '4',
    title: 'Green',
    variant: 'green',
    size: 'large',
    sizeTitle: 'Large',
  },
  {
    id: '5',
    title: 'Purple',
    variant: 'purple',
    size: 'xlarge',
    sizeTitle: 'Extra Large',
  },
];
const SpinnerDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Spinner</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Spinner</strong> component is used to indicate loading
          states in your application.
        </p>
      </section>

      {/* Demo of Spinner */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>

        {spinner.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Spinner colorVariant={item.variant} />
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Size</h2>
        {spinner.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.sizeTitle}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Spinner size={item.size} colorVariant={item.variant} />
            </div>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Spinner</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Spinner } from 'uplift-ui';

const MyComponent = () => {
  return (
    <div>
      <Spinner colorVariant="blue" size="small" />
      <Spinner colorVariant="red" size="medium" />
      <Spinner colorVariant="purple" size="large" />
      <Spinner colorVariant="green" size="xlarge" />
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
                <td className="px-4 py-2 border">colorVariant</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The color of the spinner. Options: blue, red, green, gray,
                  yellow, purple, pink.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The size of the spinner. Options: small, medium, large,
                  xlarge.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Tabs"
          prev="Marquee"
          nextPath="tabs"
          prevPath="marquee"
        />
      </div>
    </div>
  );
};

export default SpinnerDemo;
