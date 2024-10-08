import { Badge } from 'uplift-ui';
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
const BadgeDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Badge </h1>
      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Badge</strong> component is used to highlight or label
          important items. It supports different variants and sizes.
        </p>
      </section>

      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>

        {/* Success Alert */}
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Badge variant={item.variant}>{item.title}</Badge>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Size</h2>

        {/* Success Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Small</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="primary" size="small">
              Primary
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Medium</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="secondary" size="medium">
              Secondary
            </Badge>
          </div>
        </div>

        {/* Error Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Large</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="destructive" size="large">
              Secondary
            </Badge>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Type</h2>
        {/* Success Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Circle</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="primary" type="circle">
              Primary
            </Badge>
          </div>
        </div>

        {/* Error Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Rounded</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="secondary" type="rounded">
              Secondary
            </Badge>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Badge</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Badge } from 'uplift-ui';

const MyComponent = () => (
  <div>
    <Badge variant="primary" size="default">Primary</Badge>
    <Badge variant="secondary" size="small">Secondary</Badge>
    <Badge variant="destructive" size="medium">Destructive</Badge>
    <Badge variant="destructive" size="large">Destructive</Badge>
    <Badge variant="outline" size="default">Outline</Badge>
    <Badge variant="primary" size="default" type="rounded">Primary</Badge>
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
                  Defines the visual style of the badge.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">'default' | 'sm' | 'lg'</td>
                <td className="px-4 py-2 border">
                  Specifies the size of the badge.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">React.ReactNode</td>
                <td className="px-4 py-2 border">
                  The content inside the badge.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">type</td>
                <td className="px-4 py-2 border">circle | rounded</td>
                <td className="px-4 py-2 border">
                  Specifies the type of the badge.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Breadcrumbs"
          prev="Avatar"
          nextPath="breadcrumbs"
          prevPath="avatar"
        />
      </div>
    </div>
  );
};

export default BadgeDemo;
