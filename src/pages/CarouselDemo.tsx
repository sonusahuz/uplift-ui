import React from 'react';
import { CarsouselCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Carousel } from '../components';

const CarouselDemo: React.FC = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'First Slide',
      image:
        'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Second Slide',
      image:
        'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Third Slide',
      image:
        'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const carouselPropsData = [
    {
      prop: 'items',
      type: 'Array<{ id: number; title: string; image: string }>',
      description: 'An array of items to be displayed in the carousel.',
    },
  ];

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Carousel</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Carousel</strong> component is a responsive and
          interactive way to display a collection of images or content in a
          sliding format.
        </p>
      </section>

      {/* Demo of Carousel Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Carousel items={carouselItems} />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Carousel</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <CarsouselCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={carouselPropsData} />
      </section>
    </div>
  );
};

export default CarouselDemo;
