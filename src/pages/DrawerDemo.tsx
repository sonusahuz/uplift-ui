import React, { useState } from 'react';
import { Button, Drawer } from 'uplift-ui';

import SideBar from '../ui/SideBar';
import NextPrevButton from '../ui/NextPrevButton';

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
        <p className="mb-4 text-lg">
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
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React, { useState } from 'react';
import { Drawer } from 'uplift-ui';

const items = [
    {
      id: 1,
      label: 'Accordion',
      href: '/accordion',
    },
    {
      id: 2,
      label: 'Alert',
      href: '/alert',
    },
    {
      id: 3,
      label: 'Alert Dialog',
      href: '/alert-dialog',
    },
    {
      id: 4,
      label: 'Avatar',
      href: '/avatar',
    },
]
    
const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <div>
        <button
           onClick={toggleDrawer}
           className="p-2 text-white bg-blue-500 rounded"
           >
           {isOpen ? 'Close Drawer' : 'Open Drawer'}
        </button>
        
      <Drawer
        content={
          <ul>
            {items.map((item) => (
              <li>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        }
        isOpen={isOpen}
        title="Uplift UI"
        width="300px"
        setIsOpen={() => setIsOpen(false)}
      />
        
    </div>
  );
};

export default App;`}
            </code>
          </pre>
        </div>
      </section>
      <section className="my-8">
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
                <td className="px-4 py-2 border">items</td>
                <td className="px-4 py-2 border">
                  ['id: 1, label: 'Accordion',href: '/accordion']
                </td>
                <td className="px-4 py-2 border">Array of list</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">isOpen</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">give the size</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">title</td>
                <td className="px-4 py-2 border">"basic" | "detailed" </td>
                <td className="px-4 py-2 border">
                  Defines the visual style of the button.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">width</td>
                <td className="px-4 py-2 border">"basic" | "detailed" </td>
                <td className="px-4 py-2 border">
                  Defines the visual style of the button.
                </td>
              </tr>{' '}
              <tr>
                <td className="px-4 py-2 border">setIsOpens</td>
                <td className="px-4 py-2 border">"basic" | "detailed" </td>
                <td className="px-4 py-2 border">
                  Defines the visual style of the button.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Input"
          prev="Dialog"
          nextPath="input"
          prevPath="dialog"
        />
      </div>
    </div>
  );
};

export default DrawerDemo;
