import { Button, Dialog, Input } from 'uplift-ui'; // Adjust the import path as necessary
import { useState } from 'react';
import NextPrevButton from '../ui/NextPrevButton';

const DialogDemo = () => {
  const [isDialog, setIsDialog] = useState(false);

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Dialog</h1>

      {/* Dialog Section */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>

        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <div>
            <Button onClick={() => setIsDialog(true)}>Edit Profile</Button>
          </div>
        </div>

        <Dialog
          isOpen={isDialog}
          title="Edit Profile"
          description="Make changes to your profile here. Click save when you're done."
          onClose={() => setIsDialog(false)}
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <Input
                placeholder="Email"
                type="email"
                className="mt-1"
                defaultValue="johndoe@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="username" className="mb-2 font-medium">
                Username
              </label>
              <Input
                placeholder="username"
                type="text"
                className="mt-1"
                defaultValue="John Doe"
              />
            </div>
          </div>
          <div className="flex items-end justify-end mt-4">
            <Button onClick={() => setIsDialog(false)}>Save Changes</Button>
          </div>
        </Dialog>

        <h3 className="mt-6 text-2xl font-semibold">Usage</h3>
        <p className="mb-4">
          Here is how to use the <strong>Dialog</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React, { useState } from 'react';
import { Dialog } from 'uplift-ui';

const MyComponent = () => {
  const [isDialog, setIsDialog] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialog(true)}>Open Dialog</button>

      <Dialog
        isOpen={isDialog}
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
        onClose={() => setIsDialog(false)}
      >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <Input
                placeholder="Email"
                type="email"
                className="mt-1"
                defaultValue="johndoe@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="username" className="mb-2 font-medium">
                Username
              </label>
              <Input
                placeholder="username"
                type="text"
                className="mt-1"
                defaultValue="John Doe"
              />
            </div>
          </div>
          <div className="flex items-end justify-end mt-4">
            <Button onClick={() => setIsDialog(false)}>Save Changes</Button>
          </div>
      </Dialog>
    </div>
  );
};

export default MyComponent;`}
            </code>
          </pre>
        </div>
      </section>

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
                <td className="px-4 py-2 border">isOpen</td>
                <td className="px-4 py-2 border">boolean</td>
                <td className="px-4 py-2 border">
                  Controls whether the dialog is open or closed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">title</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  The title displayed at the top of the dialog.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">description</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  A brief description of the content in the dialog.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">onClose</td>
                <td className="px-4 py-2 border">void</td>
                <td className="px-4 py-2 border">
                  Function to close the dialog when triggered.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">width</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  Optional prop to set a custom width for the dialog (e.g.,
                  '400px').
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">React.ReactNode</td>
                <td className="px-4 py-2 border">
                  Content to be displayed inside the dialog.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Drawer"
          prev="Carousel"
          nextPath="drawer"
          prevPath="carousel"
        />
      </div>
    </div>
  );
};

export default DialogDemo;
