import { CardCode } from '../ui/Code';
import { PropTable } from '../ui';
import { Button, Card, Input } from '../components';

const cardPropsData = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    description: 'Content to be displayed inside the card.',
  },
  {
    prop: 'Header',
    type: '{ children: React.ReactNode }',
    description: 'Subcomponent for card header.',
  },
  {
    prop: 'Title',
    type: '{ children: React.ReactNode }',
    description: 'Subcomponent for card title.',
  },
  {
    prop: 'Description',
    type: '{ children: React.ReactNode }',
    description: 'Subcomponent for card description.',
  },
  {
    prop: 'Content',
    type: '{ children: React.ReactNode }',
    description: 'Subcomponent for card content.',
  },
  {
    prop: 'Footer',
    type: '{ children: React.ReactNode }',
    description: 'Subcomponent for card footer.',
  },
];

const CardDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Card </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 ">
          The <strong>Card</strong> component is a versatile container that can
          hold different types of content and actions about a single subject. It
          can include headers, titles, descriptions, and footers, making it
          suitable for displaying a variety of information.
        </p>
      </section>

      {/* Demo of Card Component */}
      <section className="mb-8">
        <div className="flex items-center justify-center p-6 mx-auto border rounded">
          <Card width="350px">
            <Card.Header>
              <Card.Title>Login Your Account</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description>
                <div className="space-y-4 ">
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <div className="flex items-center justify-start gap-2 mt-4">
                    <input type="checkbox" name="" id="terms" />
                    <span className="text-sm" id="terms">
                      {' '}
                      Accept terms & conditions
                    </span>
                  </div>
                </div>
              </Card.Description>
            </Card.Content>
            <Card.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Login</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Usage </h2>
        <p className="mb-4">
          Here is an example of how to use the <strong>Card</strong> component:
        </p>

        {/* Responsive Code Block */}
        <div>
          <CardCode />
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <PropTable data={cardPropsData} />
      </section>
    </div>
  );
};

export default CardDemo;
