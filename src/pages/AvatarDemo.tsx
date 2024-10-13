import { AvatarCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Avatar } from '../components';
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

const avatarPropsData = [
  {
    prop: 'src',
    type: 'string',
    description: 'URL of the image to be displayed.',
  },
  {
    prop: 'alt',
    type: 'string',
    description:
      'Alternative text for the image, or initial when no image is provided.',
  },
  {
    prop: 'variant',
    type: "'default' | 'circle' | 'square' | 'outline'",
    description: 'Shape of the avatar.',
  },
  {
    prop: 'size',
    type: "'default' | 'small' | 'medium' | 'large'",
    description: 'Size of the avatar.',
  },
];

const AvatarDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Avatar</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
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
              <Avatar
                src={item.src}
                alt="A"
                variant={
                  item.variant as 'default' | 'circle' | 'square' | 'outline'
                }
              />
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
                variant={
                  item.variant as 'default' | 'circle' | 'square' | 'outline'
                }
                size={item.size as 'default' | 'small' | 'medium' | 'large'}
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
        <div>
          <AvatarCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={avatarPropsData} />
      </section>
    </div>
  );
};

export default AvatarDemo;
