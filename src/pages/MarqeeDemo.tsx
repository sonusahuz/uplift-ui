import React from 'react';
import { imageItems } from '../utils/data';
import { MarqeeCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Card, Marquee } from '../components';

const marqueeProps = [
  {
    prop: 'direction',
    type: "'left' | 'right'",
    description:
      "Determines the scrolling direction of the marquee. Default is 'left'.",
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'The content to be displayed within the marquee.',
  },
  {
    prop: 'speed',
    type: 'number',
    description:
      'Controls the speed of the marquee animation in seconds. Default is 10 seconds.',
  },
];

const MarqueeDemo: React.FC = () => {
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
        <div>
          <MarqeeCode />
        </div>
      </section>

      <section className="mb-8">
        <PropTable data={marqueeProps} />
      </section>
    </div>
  );
};

export default MarqueeDemo;
