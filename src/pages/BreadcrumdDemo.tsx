import { BreadcrumbCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Breadcrumb } from '../components';

const BreadcrumbsDemo = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Button', href: '/docs/button' },
    { label: 'Dialog', href: '/docs/dialog' },
  ];

  const breadcrumbPropsData = [
    {
      prop: 'items',
      type: '{ label: string, href: string }[]',
      description: 'An array of objects representing breadcrumb items.',
    },
  ];

  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Breadcrumb </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Breadcrumb</strong> component helps users navigate through
          the hierarchy of pages. It shows the current page's location within
          the context of the site structure.
        </p>
      </section>

      {/* Demo of Breadcrumb */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Breadcrumb</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <BreadcrumbCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={breadcrumbPropsData} />
      </section>
    </div>
  );
};

export default BreadcrumbsDemo;
