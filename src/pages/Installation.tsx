import NextPrevButton from '../ui/NextPrevButton';

const Installation = () => {
  return (
    <div>
      <div className="p-4 ">
        <h1 className="mb-2 text-3xl font-bold">Installation 🎉</h1>
        <section className="mb-8">
          <p className="mb-4 text-lg">
            Follow the steps below to install Reactra UI in your React project:
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Step 1: Create a React Application
          </h2>
          <p className="mb-4 text-lg">
            If you don't have a React application, create one using Create React
            App:
          </p>
          <pre className="p-4 mb-4 bg-gray-100 rounded">
            <code>
              npx create-react-app my-app
              <br />
              cd my-app
            </code>
          </pre>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Step 2: Install Uplift UI
          </h2>
          <p className="mb-4 text-lg">
            Use npm or yarn to install the Reactra UI package:
          </p>
          <pre className="p-4 mb-4 bg-gray-100 rounded">
            <code>
              npm install uplift-ui
              <br />
              {/* or */}
              <br />
              yarn add uplift-ui
            </code>
          </pre>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Step 3: Import Components
          </h2>
          <p className="mb-4 text-lg">
            Import the components you want to use in your application. For
            example:
          </p>
          <div className="p-4 overflow-x-auto bg-gray-100 rounded-md ">
            <pre className="whitespace-pre">
              <code>
                {`import React from 'react';
import { Alert } from ' uplift-ui';

const MyComponent = () => {
  return (
    <div>
      <Alert variant="success">This is a success alert.</Alert>
      <Alert variant="error">This is an error alert.</Alert>
      <Alert variant="warning">This is a warning alert.</Alert>
      <Alert variant="info">This is an info alert.</Alert>
    </div>
  );
};

export default MyComponent;
`}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Step 4: Run Your Application
          </h2>
          <p className="mb-4 text-lg">
            After setting everything up, run your application:
          </p>
          <pre className="p-4 mb-4 bg-gray-100 rounded">
            <code>npm start</code>
          </pre>
        </section>
      </div>
      <div className="px-4 pb-6">
        <NextPrevButton
          next="Accordion"
          prev="Introduction"
          nextPath="accordion"
          prevPath="introduction"
        />
      </div>
    </div>
  );
};

export default Installation;
