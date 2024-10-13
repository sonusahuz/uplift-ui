import { useState } from 'react';
import { DialogCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button, Dialog, Input } from '../components';

const dialogPropsData = [
  {
    prop: 'isOpen',
    type: 'boolean',
    description: 'Controls whether the dialog is open or closed.',
  },
  {
    prop: 'title',
    type: 'string',
    description: 'The title displayed at the top of the dialog.',
  },
  {
    prop: 'description',
    type: 'string',
    description: 'A brief description of the content in the dialog.',
  },
  {
    prop: 'onClose',
    type: 'void',
    description: 'Function to close the dialog when triggered.',
  },
  {
    prop: 'width',
    type: 'string',
    description:
      "Optional prop to set a custom width for the dialog (e.g., '400px').",
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'Content to be displayed inside the dialog.',
  },
];

const DialogDemo = () => {
  const [isDialog, setIsDialog] = useState(false);

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Dialog</h1>

      {/* Dialog Section */}
      <section className="mb-8">
        <p className="mb-4 ">
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
        <div>
          <DialogCode />
        </div>
      </section>

      <section className="mb-8">
        <PropTable data={dialogPropsData} />
      </section>
    </div>
  );
};

export default DialogDemo;
