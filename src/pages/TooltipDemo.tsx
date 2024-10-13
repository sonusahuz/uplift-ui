import { TooltipCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button, Tooltip } from '../components';

const tooltipProps = [
  {
    prop: 'text',
    type: 'string',
    description: 'The text to be displayed in the tooltip.',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'The element(s) that will trigger the tooltip on hover.',
  },
];

const TooltipDemo = () => {
  return (
    <div className="p-4 ">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Tooltip</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Tooltip</strong> component provides additional information
          when hovering over an element.
        </p>
      </section>

      {/* Demo of Tooltip Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto mb-4 border rounded">
          <div className="flex items-center space-x-4">
            <Tooltip text="This is a tooltip!">
              <Button>Hover over me</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Tooltip</strong>{' '}
          component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <TooltipCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={tooltipProps} />
      </section>
    </div>
  );
};

export default TooltipDemo;
