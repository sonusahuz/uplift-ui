import { SpinnerCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Spinner } from '../components';

const spinner = [
  {
    id: '1',
    title: 'Default',
    variant: 'default',
    size: 'default',
    sizeTitle: 'Default',
  },
  {
    id: '2',
    title: 'Blue',
    variant: 'blue',
    size: 'small',
    sizeTitle: 'Small',
  },
  {
    id: '3',
    title: 'Gray',
    variant: 'gray',
    size: 'medium',
    sizeTitle: 'Medium',
  },
  {
    id: '4',
    title: 'Green',
    variant: 'green',
    size: 'large',
    sizeTitle: 'Large',
  },
  {
    id: '5',
    title: 'Purple',
    variant: 'purple',
    size: 'xlarge',
    sizeTitle: 'Extra Large',
  },
];

const spinnerProps = [
  {
    prop: 'colorVariant',
    type: 'string',
    description:
      'The color of the spinner. Options: blue, red, green, gray, yellow, purple, pink.',
  },
  {
    prop: 'size',
    type: 'string',
    description:
      'The size of the spinner. Options: small, medium, large, xlarge.',
  },
];
const SpinnerDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Spinner</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4">
          The <strong>Spinner</strong> component is used to indicate loading
          states in your application.
        </p>
      </section>

      {/* Demo of Spinner */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>

        {spinner.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Spinner
                colorVariant={
                  item.variant as 'blue' | 'red' | 'green' | 'gray' | 'purple'
                }
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Size</h2>
        {spinner.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.sizeTitle}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Spinner
                size={item.size as 'small' | 'medium' | 'large' | 'xlarge'}
                colorVariant={
                  item.variant as 'blue' | 'red' | 'green' | 'gray' | 'purple'
                }
              />
            </div>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Spinner</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <SpinnerCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={spinnerProps} />
      </section>
    </div>
  );
};

export default SpinnerDemo;
