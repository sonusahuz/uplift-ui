import { AccordionCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Accordion } from '../components';

const AccordionDemo = () => {
  const accordionItems = [
    {
      title: 'What is a Modal?',
      variant: 'default',
      type: 'Default',
      content:
        'A modal is a dialog box/popup window that is displayed on top of the current page. It is used for user notifications or to request user input.',
    },
    {
      title: 'What is an Accordion?',
      variant: 'detailed',
      type: 'Detailed',
      content:
        'An accordion is a UI component that allows users to expand and collapse sections of content. It helps to save space and keep the interface clean.',
    },
    {
      title: 'What is an Accordion?',
      variant: 'underline',
      type: 'Underline',
      content:
        'An accordion is a UI component that allows users to expand and collapse sections of content. It helps to save space and keep the interface clean.',
    },
  ];

  const propsData = [
    {
      prop: 'title',
      type: 'string',
      description: 'The text displayed as the title of the accordion.',
    },
    {
      prop: 'content',
      type: 'ReactNode',
      description: 'The content displayed when the accordion is expanded.',
    },
    {
      prop: 'variant',
      type: '"basic" | "detailed" | "underline"',
      description: 'Defines the visual style of the accordion.',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="mb-2 text-3xl font-bold">Accordion</h1>
      <section>
        <p className="mb-4 ">
          The <strong>Accordion</strong> component allows users to expand and
          collapse sections of content to show or hide information.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">Variants</h2>
          {accordionItems.map((item) => (
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-semibold">{item.type}</h3>
              <Accordion
                title={item.title}
                content={<p>{item.content}</p>}
                variant={item.variant as 'default' | 'detailed' | 'underline'}
              />
            </div>
          ))}
        </section>
        <h3 className="mt-6 mb-2 text-2xl font-semibold">Usage</h3>
        <p className="mb-4">
          Here is how to use the <strong>Accordion</strong> component:
        </p>
        <div>
          <AccordionCode />
        </div>
      </section>

      <section className="my-8">
        <PropTable data={propsData} />
      </section>
    </div>
  );
};

export default AccordionDemo;
