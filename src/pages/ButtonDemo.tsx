import { Button } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';
const variants = [
  {
    id: 1,
    title: 'Primary',
    variant: 'primary',
    size: 'small',
  },
  {
    id: 2,
    title: 'Secondary',
    variant: 'secondary',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Destructive',
    variant: 'destructive',
    size: 'large',
  },
  {
    id: 4,
    title: 'Outline',
    variant: 'outline',
    size: 'large',
  },
];
const ButtonDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Button </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Button</strong> component is used to trigger actions and
          interactions. It supports different variants and sizes.
        </p>
      </section>

      {/* Demo of Button */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        {variants.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Button variant={item.variant}>{item.title}</Button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        {/* Success Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Small</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="primary" size="small">
              Primary
            </Button>
          </div>
        </div>

        {/* Error Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Medium</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="secondary" size="medium">
              Secondary
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Large</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="destructive" size="large">
              Secondary
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Button</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Button } from 'uplift-ui';

const MyComponent = () => (
  <div>
    <Button variant="primary" size="default">Submit</Button>
    <Button variant="secondary" size="sm">Cancel</Button>
  </div>
);

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
                  'default' | 'primary' | 'secondary' | 'destructive' |
                  'outline'
                </td>
                <td className="px-4 py-2 border">
                  Defines the visual style of the button.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">'default' | 'sm' | 'lg'</td>
                <td className="px-4 py-2 border">
                  Specifies the size of the button.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">React.ReactNode</td>
                <td className="px-4 py-2 border">
                  The content inside the button.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onClick</td>
                <td className="px-4 py-2 border">void</td>
                <td className="px-4 py-2 border">
                  Function to call when the button is clicked.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">width</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  Custom width for the button.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Card"
          prev="Breadcrumbs"
          nextPath="card"
          prevPath="breadcrumbs"
        />
      </div>
    </div>
  );
};

export default ButtonDemo;
