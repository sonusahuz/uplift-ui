import { Card, Button, Input } from 'uplift-ui';
import NextPrevButton from '../ui/NextPrevButton';

const CardDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Card </h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
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
        <div className="p-4 overflow-x-auto bg-gray-100 rounded-md">
          <pre className="whitespace-pre">
            <code>
              {`import React from 'react';
import { Card } from 'uplift-ui';

const MyComponent = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>My Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          This is an example description of my card content.
        </Card.Description>
      </Card.Content>
      <Card.Footer>
        <button className="btn">Learn More</button>
      </Card.Footer>
    </Card>
  );
};

export default MyComponent;
`}
            </code>
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Prop</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">children</td>
                <td className="px-4 py-2 border">React.ReactNode</td>
                <td className="px-4 py-2 border">
                  Content to be displayed inside the card.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Header</td>
                <td className="px-4 py-2 border">{`{ children: React.ReactNode }`}</td>
                <td className="px-4 py-2 border">
                  Subcomponent for card header.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Title</td>
                <td className="px-4 py-2 border">{`{ children: React.ReactNode }`}</td>
                <td className="px-4 py-2 border">
                  Subcomponent for card title.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Description</td>
                <td className="px-4 py-2 border">{`{ children: React.ReactNode }`}</td>
                <td className="px-4 py-2 border">
                  Subcomponent for card description.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Content</td>
                <td className="px-4 py-2 border">{`{ children: React.ReactNode }`}</td>
                <td className="px-4 py-2 border">
                  Subcomponent for card content.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Footer</td>
                <td className="px-4 py-2 border">{`{ children: React.ReactNode }`}</td>
                <td className="px-4 py-2 border">
                  Subcomponent for card footer.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <NextPrevButton
          next="Carsousel"
          prev="Button"
          nextPath="carousel"
          prevPath="button"
        />
      </div>
    </div>
  );
};

export default CardDemo;
