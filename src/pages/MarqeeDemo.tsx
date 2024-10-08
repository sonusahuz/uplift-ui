import React from 'react';
import { Marquee } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';
import Card from '../components/Card';

const MarqueeDemo: React.FC = () => {
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
    <div className="p-4">
      <h1 className="mb-2 text-3xl font-bold">Marquee</h1>

      {/* Description */}
      <section className="mb-8">
        <p>
          The <strong>Marquee</strong> component displays a scrolling message or
          text across the screen.
        </p>
      </section>

      {/* Demo of Marquee Component */}
      <section className="mb-8">
        <div className="flex flex-col items-center justify-center p-6 mx-auto border rounded">
          <Marquee direction="left" speed={30}>
            <div className="flex items-center justify-between">
              {imageItems.reverse().map((item) => (
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

          <Marquee direction="right" speed={30}>
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
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is how to use the <strong>Marquee</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre>
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
                <td className="px-4 py-2 border">direction</td>
                <td className="px-4 py-2 border">'left' | 'right'</td>
                <td className="px-4 py-2 border">
                  Determines the scrolling direction of the marquee. Default is
                  'left'.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">ReactNode</td>
                <td className="px-4 py-2 border">
                  The content to be displayed within the marquee.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">speed</td>
                <td className="px-4 py-2 border">number</td>
                <td className="px-4 py-2 border">
                  Controls the speed of the marquee animation in seconds.
                  Default is 10 seconds.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div>
        <NextPrevButton
          next="Spinner"
          prev="Input"
          nextPath="spinner"
          prevPath="input"
        />
      </div>
    </div>
  );
};

export default MarqueeDemo;
