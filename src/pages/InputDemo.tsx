import { Input } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';
const InputDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Input </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Input</strong> component is a versatile input field that
          can be used for text, passwords, emails, and other types of user
          input.
        </p>
      </section>

      {/* Demo of Input Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
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
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Input } from 'uplift-ui';

const MyComponent = () => {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <Input id="username" placeholder="Enter your username" />
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
                <td className="px-4 py-2 border">className</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  Additional CSS classes for styling.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">type</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The type of input (e.g., text, password, email). Defaults to
                  "text".
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">placeholder</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  Placeholder text for the input field.
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border">...props</td>
                <td className="px-4 py-2 border">{`React.InputHTMLAttributes<HTMLInputElement>`}</td>
                <td className="px-4 py-2 border">
                  All other standard input attributes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Marquee"
          prev="drawer"
          nextPath="marquee"
          prevPath="drawer"
        />
      </div>
    </div>
  );
};

export default InputDemo;
