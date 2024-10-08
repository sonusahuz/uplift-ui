import React from 'react';
import NextPrevButton from '../ui/NextPrevButton';
import { Checkbox, Label } from 'uplift-ui';

const LabelDemo = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Label</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
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
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Label } from 'uplift-ui';

const MyComponent = () => (
  <div>
    <div className="flex items-center space-x-2">
        <Checkbox
            checked={checked}
            id="terms"
            className="cursor-pointer "
            onChange={(e) => setChecked(e.target.checked)}
        />
        <Label htmlFor="terms" className="cursor-pointer ">Accept terms and conditions</Label>
    </div>
  </div>
);

export default MyComponent;
`}
            </code>
          </pre>
        </div>
      </section>

      {/* Next and Previous Button Navigation */}
      <div>
        <NextPrevButton
          next="Checkbox"
          prev="Button"
          nextPath="checkbox"
          prevPath="button"
        />
      </div>
    </div>
  );
};

export default LabelDemo;
