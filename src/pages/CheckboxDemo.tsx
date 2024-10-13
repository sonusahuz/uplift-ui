import { useState } from 'react';
import { CheckboxCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Checkbox } from '../components';

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

const checkboxPropsData = [
  {
    prop: 'checked',
    type: 'boolean',
    description: 'Indicates whether the checkbox is checked.',
  },
  {
    prop: 'onChange',
    type: 'function',
    description: 'Function to call when the checkbox state changes.',
  },
  {
    prop: 'label',
    type: 'string',
    description: 'The label text displayed next to the checkbox.',
  },
  {
    prop: 'size',
    type: "'small' | 'medium' | 'large'",
    description: 'Specifies the size of the checkbox.',
  },
  {
    prop: 'color',
    type: "'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'",
    description: 'Defines the color variant of the checkbox.',
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
        <p className="mb-4 ">
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
                size={item.size as 'small' | 'medium' | 'large'}
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
                color={
                  item.color as
                    | 'primary'
                    | 'secondary'
                    | 'success'
                    | 'error'
                    | 'warning'
                    | 'info'
                }
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
        <div>
          <CheckboxCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={checkboxPropsData} />
      </section>
    </div>
  );
};

export default CheckboxDemo;
