export const AccordionCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Accordion } from 'uplift-ui';
  const accordionItems = [
  {
    title: 'What is a Modal?',
    variant: 'default',
    type: 'Default',
    content:
      'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
  },
  {
    title: 'What is a Modal?',
    variant: 'detailed',
    type: 'Detailed',
    content:
      'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
  },
  {
    title: 'What is a Modal?',
    variant: 'underline',
    type: 'Underline',
    content:
      'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
  },
 ];
    
  const App = () => {
    return (
      <div>
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
            {accordionItems.map((item) => (
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">{item.type}</h3>
                <Accordion
                  title={item.title}
                  content={<p>{item.content}</p>}
                  variant={item.variant}
                />
              </div>
            ))}
          </section>
      </div>
    );
  };
  
  export default App;`}
      </code>
    </pre>
  </div>
);

export const AlertCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Alert } from 'uplift-ui';
  
  const App = () => {
    return (
      <div>
        <Alert variant="success">This is a success alert.</Alert>
        <Alert variant="error">This is an error alert.</Alert>
        <Alert variant="warning">This is a warning alert.</Alert>
        <Alert variant="info">This is an info alert.</Alert>
      </div>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const AlertDialogCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React, { useState } from 'react';
  import { Button, AlertDialog } from 'uplift-ui'; 
  const App = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleCancel = () => {
      setIsOpen(false);
    };
  
    const handleConfirm = () => {
      setIsOpen(false);
      alert('Confirmed!');
    };
  
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>
        <AlertDialog
          isOpen={isOpen}
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </div>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const AvatarCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import {Avatar} from 'uplift-ui';
  
  const images = [
    { src: 'https://randomuser.me/api/portraits/men/14.jpg', alt: 'User 1' },
    { src: 'https://randomuser.me/api/portraits/men/91.jpg', alt: 'User 2' },
    { src: 'https://randomuser.me/api/portraits/men/23.jpg', alt: 'User 3' },
    { src: 'https://randomuser.me/api/portraits/men/12.jpg', alt: 'User 4' },
    { src: 'https://randomuser.me/api/portraits/men/35.jpg', alt: 'User 5' },
  ];
  
  const App = () => (
    <div>
      {images.map((item) => (
            <div className="mb-4">
              <div className="flex items-center justify-center p-6 mx-auto border rounded">
                <Avatar
                  src={item.src}
                  alt="A"
                />
              </div>
      </div>
      ))}
  
      <div>
        <h3 className="mb-2 text-xl font-semibold">Avatar Circles</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Avatar images={images} variant="circle" size="lg" />
          </div>
      </div>
    </div>
  );
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const BadgeCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Badge } from 'uplift-ui';
  
  const App = () => (
    <div>
      <Badge variant="primary" size="default">Primary</Badge>
      <Badge variant="secondary" size="small">Secondary</Badge>
      <Badge variant="destructive" size="medium">Destructive</Badge>
      <Badge variant="destructive" size="large">Destructive</Badge>
    </div>
  );
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const BreadcrumbCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Breadcrumb } from 'uplift-ui';
  
  const App = () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ];
  
    return <Breadcrumb items={items} />;
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const ButtonCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Button } from 'uplift-ui';
  
  const App = () => (
    <div>
      <Button variant="primary" size="default">Submit</Button>
      <Button variant="secondary" size="sm">Cancel</Button>
    </div>
  );
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);
export const CardCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import { Button, Card } from 'uplift-ui';

const App = () => {
  return (
    <Card width="400px">
      <Card.Header>
        <Card.Title>My Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          This is an example description of my card content.
        </Card.Description>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  );
};

export default App;
`}
      </code>
    </pre>
  </div>
);
export const CarsouselCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Carousel } from 'uplift-ui';
  
  const App: React.FC = () => {
    const carouselItems = [
      {
        id: 1,
        title: 'First Slide',
        image: 'https://via.placeholder.com/600x300?text=First+Slide',
      },
      {
        id: 2,
        title: 'Second Slide',
        image: 'https://via.placeholder.com/600x300?text=Second+Slide',
      },
      {
        id: 3,
        title: 'Third Slide',
        image: 'https://via.placeholder.com/600x300?text=Third+Slide',
      },
    ];
  
    return (
      <div>
        <Carousel items={carouselItems} />
      </div>
    );
  };
  
  export default App;`}
      </code>
    </pre>
  </div>
);
export const CheckboxCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React, { useState } from 'react';
  import { Checkbox } from 'uplift-ui';
  
  const App = () => {
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
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);
export const DialogCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React, { useState } from 'react';
  import { Dialog , Input, Button } from 'uplift-ui';
  
  const App = () => {
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
  
  export default App;`}
      </code>
    </pre>
  </div>
);

export const DrawerCode = () => (
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
);

export const InputCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Input } from 'uplift-ui';
  
  const App = () => {
    return (
      <div>
        <label htmlFor="username">Username</label>
        <Input id="username" placeholder="Enter your username" />
      </div>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const LabelCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Label } from 'uplift-ui';
  
  const App = () => (
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
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const MarqeeCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
                
  import { Marquee } from 'uplift-ui'; 
  
  const App: React.FC = () => {
   
    const imageItems = [
      {
        id: '1',
        name: 'John Doe',
        username: '@johndoe',
        description:
          "I've never seen anything like this before. It's amazing. I love it.",
        url: 'https://randomuser.me/api/portraits/men/74.jpg',
      },
      {
        id: '2',
        name: 'Leanne Graham',
        username: '@leannegraham',
        description: "I'm at a loss for words. This is amazing. I love it.",
        url: 'https://randomuser.me/api/portraits/men/77.jpg',
      },
      {
        id: '3',
        name: 'Ervin Howell',
        username: '@ervinhowell',
        description: "I don't know what to say. I'm speechless. This is amazing.",
        url: 'https://randomuser.me/api/portraits/men/54.jpg',
      },
      {
        id: '4',
        name: 'Patricia',
        username: '@patricia',
        description: "I'm at a loss for words. This is amazing. I love it.",
        url: 'https://randomuser.me/api/portraits/men/26.jpg',
      },
      {
        id: '5',
        name: 'Weissnat',
        username: '@weissnat',
        description: "I'm at a loss for words. This is amazing. I love it.",
        url: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        id: '6',
        name: 'Nicholas',
        username: '@Nicholas',
        description: "I don't know what to say. I'm speechless. This is amazing.",
        url: 'https://randomuser.me/api/portraits/men/24.jpg',
      },
    ];
  
    return (
      <div>
        <Marquee direction="right" speed={40}>
              <div className="flex items-center justify-between">
                {imageItems.map((item) => (
                  <Card key={item.id} width="200px">
                    <div className="flex items-center justify-start gap-2">
                      <img
                        key={item.id}
                        src={item.url}
                        alt={item.username}
                        className="w-10 h-10 mx-2 rounded-full"
                      />
                      <div className="text-xs">
                        <h1 className="font-semibold">{item.name}</h1>
                        <p className="text-gray-500">{item.username}</p>
                      </div>
                    </div>
                    {/* Truncated description */}
                    <p className="px-2 mt-2 overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
        </Marquee>
      </div>
    );
  };
  
  export default App;`}
      </code>
    </pre>
  </div>
);

export const ProgressCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre ">
      <code>
        {`import React from 'react';
  import { Progress } from 'uplift-ui';
  
  const App = () => (
    <div>
      // states 
      <Progress value={40} max={100} />
      
      // size 
      <Progress value={40} max={100} size="small" />
  
      // color 
      <Progress value={40} max={100} color="success" />
    </div>
  );
  
  export default App;`}
      </code>
    </pre>
  </div>
);

export const SpinnerCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Spinner } from 'uplift-ui';
  
  const App = () => {
    return (
      <div>
        <Spinner colorVariant="blue" size="small" />
        <Spinner colorVariant="red" size="medium" />
        <Spinner colorVariant="purple" size="large" />
        <Spinner colorVariant="green" size="xlarge" />
      </div>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const TabsCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React, { useState } from 'react';
  import { Tabs } from 'uplift-ui';
  
  const App = () => {
    const tabs = [
      { label: 'Tab 1', content: <p>This is Tab 1 content.</p> },
      { label: 'Tab 2', content: <p>This is Tab 2 content.</p> },
      { label: 'Tab 3', content: <p>This is Tab 3 content.</p> },
    ];
  
    return <Tabs tabs={tabs} />;
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const ToastCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Toast } from 'uplift-ui';
  
  const App = () => {
     const [toastVisible, setToastVisible] = useState(false);
  
    const showToast = () => {
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 3000); // Auto-hide after 3 seconds
    };
    
    return (
      <div>
        <Button onClick={showToast}>Show Toast</Button>
        {toastVisible && (
            <Toast
              message="This is a toast notification!"
              onClose={() => setToastVisible(false)}
            />
        )}
      </div>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);

export const TooltipCode = () => (
  <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
    <pre className="whitespace-pre">
      <code>
        {`import React from 'react';
  import { Tooltip } from 'uplift-ui';
  
  const App = () => {
    return (
      <Tooltip text="This is a tooltip!">
          <Button>Hover over me</Button>
      </Tooltip>
    );
  };
  
  export default App;
  `}
      </code>
    </pre>
  </div>
);
