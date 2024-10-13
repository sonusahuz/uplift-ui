import React from 'react';
import { LabelCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Checkbox, Label } from '../components';

const labelPropsData = [
  {
    prop: 'htmlFor',
    type: 'string',
    description:
      'Specifies the id of the input element the label is associated with.',
  },
  {
    prop: 'className',
    type: 'string',
    description: 'Additional CSS classes for styling.',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'Content to be displayed inside the label.',
  },
  {
    prop: '...props',
    type: 'React.InputHTMLAttributes<HTMLInputElement>',
    description: 'All other standard input attributes.',
  },
];
const LabelDemo = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Label</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Label</strong> component is used to provide descriptions
          for form inputs.
        </p>
      </section>

      {/* Demo of Label Sizes */}
      <section className="mb-8 space-y-6">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={checked}
              id="terms"
              color="success"
              className="cursor-pointer "
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Label htmlFor="terms" className="cursor-pointer ">
              Accept terms and conditions
            </Label>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Label</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <LabelCode />
        </div>
      </section>

      <section className="mb-8">
        <PropTable data={labelPropsData} />
      </section>
    </div>
  );
};

export default LabelDemo;
