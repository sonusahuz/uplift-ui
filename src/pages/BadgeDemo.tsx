import { BadgeCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Badge } from '../components';
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

const badgePropsData = [
  {
    prop: 'variant',
    type: "'default' | 'primary' | 'secondary' | 'destructive' | 'outline'",
    description: 'Defines the visual style of the badge.',
  },
  {
    prop: 'size',
    type: "'default' | 'sm' | 'lg'",
    description: 'Specifies the size of the badge.',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'The content inside the badge.',
  },
  {
    prop: 'type',
    type: "'circle' | 'rounded'",
    description: 'Specifies the type of the badge.',
  },
];

const BadgeDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Badge </h1>
      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Badge</strong> component is used to highlight or label
          important items. It supports different variants and sizes.
        </p>
      </section>

      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>

        {/* Success Alert */}
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center justify-center p-6 mx-auto border rounded">
              <Badge
                variant={
                  item.variant as
                    | 'default'
                    | 'primary'
                    | 'secondary'
                    | 'destructive'
                    | 'outline'
                }
              >
                {item.title}
              </Badge>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Size</h2>

        {/* Success Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Small</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="primary" size="small">
              Primary
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Medium</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="secondary" size="medium">
              Secondary
            </Badge>
          </div>
        </div>

        {/* Error Alert */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-semibold">Large</h3>
          <div className="flex items-center justify-center p-6 mx-auto border rounded">
            <Badge variant="destructive" size="large">
              Secondary
            </Badge>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Badge</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <BadgeCode />
        </div>
      </section>
      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={badgePropsData} />
      </section>
    </div>
  );
};

export default BadgeDemo;
