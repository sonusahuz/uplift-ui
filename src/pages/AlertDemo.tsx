import { AlertCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Alert } from '../components';

const AlertDemo = () => {
  const variants = [
    {
      id: '1',
      title: 'Success',
      description: 'This is a success alert.',
      variant: 'success',
    },
    {
      id: '2',
      title: 'Error',
      description: 'This is a error alert.',
      variant: 'error',
    },
    {
      id: '3',
      title: 'Warning',
      description: 'This is a warning alert.',
      variant: 'warning',
    },
    {
      id: '4',
      title: 'Info',
      description: 'This is a info alert.',
      variant: 'info',
    },
  ];

  const propsData = [
    {
      prop: 'variant',
      type: '"success" | "error" | "warning" | "info"',
      description:
        'Defines the style of the alert based on the context (success, error, etc.).',
    },
    {
      prop: 'children',
      type: 'ReactNode',
      description: 'The content of the alert.',
    },
  ];

  return (
    <div className="p-4 ">
      <h1 className="mb-2 text-3xl font-bold">Alert</h1>

      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Alert</strong> component is used to display important
          messages to the user. It comes in various styles and can be used for
          warnings, errors, success messages, and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        {variants.map((item) => (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <Alert
              variant={
                item.variant as
                  | 'default'
                  | 'secondary'
                  | 'success'
                  | 'error'
                  | 'warning'
                  | 'info'
              }
            >
              {item.description}
            </Alert>
          </div>
        ))}
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is how to use the <strong>Alert</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <AlertCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={propsData} />
      </section>
    </div>
  );
};

export default AlertDemo;
