import { useState } from 'react';
import { Checkbox } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

const sizes = [
  {
    id: 1,
    title: 'Small',
    size: 'small',
  },
  {
    id: 2,
    title: 'Medium',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Large',
    size: 'large',
  },
];

const colors = [
  {
    id: 1,
    title: 'Primary',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Secondary',
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Success',
    color: 'success',
  },
  {
    id: 4,
    title: 'Error',
    color: 'error',
  },
  {
    id: 5,
    title: 'Warning',
    color: 'warning',
  },
  {
    id: 6,
    title: 'Info',
    color: 'info',
  },
];

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Checkbox</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Checkbox</strong> component allows users to select one or
          more options.
        </p>
      </section>

      {/* Demo of Checkbox Sizes */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        {sizes.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Checkbox
                size={item.size}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label={item.title}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Demo of Checkbox Colors */}
      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Colors</h2>
        {colors.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Checkbox
                color={item.color}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label={item.title}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Checkbox</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React, { useState } from 'react';
import { Checkbox } from 'uplift-ui';

const MyComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      label="Agree to terms"
      color="primary"
      size="medium"
    />
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
                <td className="px-4 py-2 border">checked</td>
                <td className="px-4 py-2 border">boolean</td>
                <td className="px-4 py-2 border">
                  Indicates whether the checkbox is checked.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onChange</td>
                <td className="px-4 py-2 border">function</td>
                <td className="px-4 py-2 border">
                  Function to call when the checkbox state changes.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">label</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The label text displayed next to the checkbox.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">
                  'small' | 'medium' | 'large'
                </td>
                <td className="px-4 py-2 border">
                  Specifies the size of the checkbox.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">color</td>
                <td className="px-4 py-2 border">
                  'primary' | 'secondary' | 'success' | 'error' | 'warning' |
                  'info'
                </td>
                <td className="px-4 py-2 border">
                  Defines the color variant of the checkbox.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Next and Previous Button Navigation */}
      <div>
        <NextPrevButton
          next="Button"
          prev="Radio Button"
          nextPath="button"
          prevPath="radio-button"
        />
      </div>
    </div>
  );
};

export default CheckboxDemo;
