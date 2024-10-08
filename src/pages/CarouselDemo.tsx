import React from 'react';
import { Carousel } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

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

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Carousel</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
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
                <td className="px-4 py-2 border">items</td>
                <td className="px-4 py-2 border">{`Array<{ id: number; title: string; image: string }>`}</td>
                <td className="px-4 py-2 border">
                  An array of items to be displayed in the carousel.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Dialog"
          prev="Card "
          nextPath="dialog"
          prevPath="card"
        />
      </div>
    </div>
  );
};

export default CarouselDemo;
