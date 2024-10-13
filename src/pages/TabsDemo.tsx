import { TabsCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Tabs } from '../components';

const TabsDemo = () => {
  const tabsProps = [
    {
      prop: 'tabs',
      type: '{ label: string, content: React.ReactNode }[]',
      description: 'An array of objects representing each tab.',
    },
    {
      prop: 'activeTab',
      type: 'number',
      description: 'The index of the active tab (optional).',
    },
  ];
  const tabs = [
    { label: 'Tab 1', content: <p>This is the content for Tab 1.</p> },
    { label: 'Tab 2', content: <p>This is the content for Tab 2.</p> },
    { label: 'Tab 3', content: <p>This is the content for Tab 3.</p> },
  ];

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Tabs</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4">
          The <strong>Tabs</strong> component is used to switch between
          different sections of content. It is a great way to organize large
          amounts of content in a small area, making it easier for users to
          navigate.
        </p>
      </section>

      {/* Demo of Tabs Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Tabs tabs={tabs} />
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Tabs</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <TabsCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={tabsProps} />
      </section>
    </div>
  );
};

export default TabsDemo;
