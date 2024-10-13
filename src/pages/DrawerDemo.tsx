import React, { useState } from 'react';
import SideBar from '../ui/SideBar';
import { DrawerCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button, Drawer } from '../components';

const drawerPropsData = [
  {
    prop: 'items',
    type: 'Array<{ id: number; label: string; href: string }>',
    description: 'Array of list items to be displayed in the drawer.',
  },
  {
    prop: 'isOpen',
    type: 'boolean',
    description: 'Controls whether the drawer is open or closed.',
  },
  {
    prop: 'title',
    type: '"basic" | "detailed"',
    description: 'Defines the visual style of the drawer.',
  },
  {
    prop: 'width',
    type: '"basic" | "detailed"',
    description: 'Specifies the width of the drawer.',
  },
  {
    prop: 'setIsOpen',
    type: '(isOpen: boolean) => void',
    description: 'Function to set the open state of the drawer.',
  },
];

const DrawerDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Drawer</h1>

      {/* Description */}
      <section className="mb-8">
        <p className="mb-4">
          The <strong>Drawer</strong> component provides a slide-in panel from
          the right side of the screen.
        </p>
      </section>

      {/* Demo of Drawer Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Button onClick={toggleDrawer}>
            {isOpen ? 'Close Drawer' : 'Open Drawer'}
          </Button>
          <Drawer
            content={<SideBar />}
            isOpen={isOpen}
            title="UpliftUI"
            width="250px"
            setIsOpen={setIsOpen}
          />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is how to use the <strong>Drawer</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <DrawerCode />
        </div>
      </section>
      <section className="my-8">
        <PropTable data={drawerPropsData} />
      </section>
    </div>
  );
};

export default DrawerDemo;
