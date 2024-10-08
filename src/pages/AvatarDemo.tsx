import { Avatar } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';
const variants = [
  {
    id: '1',
    title: 'Circle',
    variant: 'circle',
    src: 'https://randomuser.me/api/portraits/men/14.jpg',
    size: 'small',
    sizetitle: 'Small',
    alt: 'user 1',
  },
  {
    id: '1',
    title: 'Square',
    variant: 'square',
    src: 'https://randomuser.me/api/portraits/men/10.jpg',
    size: 'medium',
    sizetitle: 'Medium',
    alt: 'user 2',
  },
  {
    id: '1',
    title: 'Rounded',
    variant: 'rounded',
    src: 'https://randomuser.me/api/portraits/men/23.jpg',
    size: 'large',
    sizetitle: 'Large',
    alt: 'user 3',
  },
];

const AvatarDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Avatar</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Avatar</strong> component is used to display a user
          profile picture or an initial in case no image is provided. It
          supports different sizes and shapes.
        </p>
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variant</h2>
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Avatar src={item.src} alt="A" variant={item.variant} />
            </div>
          </div>
        ))}
        <div>
          <h3 className="mb-2 text-xl font-semibold">Avatar Circles</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Avatar images={variants} variant="circle" size="large" />
          </div>
        </div>
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>

        {/* Success Alert */}
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.sizetitle}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Avatar
                src={item.src}
                alt="A"
                variant={item.variant}
                size={item.size}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Avatar</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
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

const MyComponent = () => (
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
                <td className="px-4 py-2 border">src</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  URL of the image to be displayed.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">alt</td>
                <td className="px-4 py-2 border">string</td>
                <td className="px-4 py-2 border">
                  Alternative text for the image, or initial when no image is
                  provided.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">variant</td>
                <td className="px-4 py-2 border">
                  'default' | 'circle' | 'square' | 'outline'
                </td>
                <td className="px-4 py-2 border">Shape of the avatar.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">'default' | 'sm' | 'lg'</td>
                <td className="px-4 py-2 border">Size of the avatar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Badge"
          prev="Alert Dialog"
          nextPath="badge"
          prevPath="alert-dialog"
        />
      </div>
    </div>
  );
};

export default AvatarDemo;
