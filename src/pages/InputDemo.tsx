import { InputCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Input, Label } from '../components';

const inputPropsData = [
  {
    prop: 'className',
    type: 'string',
    description: 'Additional CSS classes for styling.',
  },
  {
    prop: 'type',
    type: 'string',
    description:
      "The type of input (e.g., text, password, email). Defaults to 'text'.",
  },
  {
    prop: 'placeholder',
    type: 'string',
    description: 'Placeholder text for the input field.',
  },
  {
    prop: '...props',
    type: 'React.InputHTMLAttributes<HTMLInputElement>',
    description: 'All other standard input attributes.',
  },
];

const InputDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Input </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Input</strong> component is a versatile input field that
          can be used for text, passwords, emails, and other types of user
          input.
        </p>
      </section>

      {/* Demo of Input Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <div className="mb-4">
            <Label className="block mb-2">Email</Label>
            <Input
              className="p-2 border rounded w-60 lg:w-96"
              placeholder="Enter Email"
            />
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Input</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <InputCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={inputPropsData} />
      </section>
    </div>
  );
};

export default InputDemo;
