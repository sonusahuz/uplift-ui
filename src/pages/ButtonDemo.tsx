import { ButtonCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button } from '../components';

const variants = [
  {
    id: 1,
    title: 'Primary',
    variant: 'primary',
    size: 'small',
  },
  {
    id: 2,
    title: 'Secondary',
    variant: 'secondary',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Destructive',
    variant: 'destructive',
    size: 'large',
  },
  {
    id: 4,
    title: 'Outline',
    variant: 'outline',
    size: 'large',
  },
];

const buttonPropsData = [
  {
    prop: 'variant',
    type: "'default' | 'primary' | 'secondary' | 'destructive' | 'outline'",
    description: 'Defines the visual style of the button.',
  },
  {
    prop: 'size',
    type: "'default' | 'sm' | 'lg'",
    description: 'Specifies the size of the button.',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'The content inside the button.',
  },
  {
    prop: 'onClick',
    type: '() => void',
    description: 'Function to call when the button is clicked.',
  },
  {
    prop: 'width',
    type: 'string',
    description: 'Custom width for the button.',
  },
];

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'link';
const ButtonDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Button </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4">
          The <strong>Button</strong> component is used to trigger actions and
          interactions. It supports different variants and sizes.
        </p>
      </section>

      {/* Demo of Button */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        {variants.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Button variant={item.variant as ButtonVariant}>
                {item.title}
              </Button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        {/* Success Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Small</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="primary" size="small">
              Primary
            </Button>
          </div>
        </div>

        {/* Error Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Medium</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="secondary" size="medium">
              Secondary
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Large</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Button variant="destructive" size="large">
              Secondary
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Button</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <ButtonCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={buttonPropsData} />
      </section>
    </div>
  );
};

export default ButtonDemo;
