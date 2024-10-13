### Uplift-UI

Uplift-UI is a versatile React component library that simplifies the development of modern web applications. It provides pre-built UI components that are customizable and easy to use. The library is built using **React**, **TypeScript**, and **TailwindCSS**, making it highly flexible for building responsive and visually appealing interfaces.

## Features

- Pre-built, customizable components
- Typescript support for better type-checking and code maintainability
- Uses TailwindCSS for styling flexibility
- Modular and easy to integrate into any React project

---

## Installation

To install **Uplift-UI** in your project, use npm or yarn:

```bash
npm install uplift-ui
```

or

```bash
yarn add uplift-ui
```

---

## Usage

### Alert Component

The `Alert` component is used to display important messages or notifications to the user. It supports multiple variants and sizes, making it flexible for different types of messages, such as success, warning, error, and info.

### Importing the Alert Component

First, you need to import the `Alert` component in your file.

```tsx
import { Alert } from 'uplift-ui';
```

### Basic Example

Here’s a basic example of how to use the `Alert` component:

```tsx
import React from 'react';
import { Alert } from 'uplift-ui';

const AlertDemo = () => {
  return (
    <div>
      <Alert variant="success" title="Success!">
        Your operation was completed successfully.
      </Alert>
    </div>
  );
};

export default AlertDemo;
```

### Variants

The `Alert` component comes with several variants that help in differentiating between the types of messages. Below are the available variants:

- `default`: Standard alert for neutral messages
- `success`: Used to indicate success messages
- `error`: Displays an error message
- `warning`: Highlights warnings to the user
- `info`: Provides informational messages

### Example:

```tsx
import React from 'react';
import { Alert } from 'uplift-ui';

const AlertDemo = () => {
  return (
    <div>
      <Alert variant="success" title="Success!">
        Operation was successful.
      </Alert>
      <Alert variant="error" title="Error!">
        Something went wrong.
      </Alert>
      <Alert variant="warning" title="Warning!">
        Be cautious about this action.
      </Alert>
      <Alert variant="info" title="Information!">
        This is an informational alert.
      </Alert>
    </div>
  );
};

export default AlertDemo;
```

### Sizes

The `Alert` component supports different sizes for more flexibility in design. The available size options are:

- `default`: The standard size
- `small`: A smaller version of the alert
- `large`: A larger version for more prominent messages

### Example:

```tsx
import React from 'react';
import { Alert } from 'uplift-ui';

const AlertDemo = () => {
  return (
    <div>
      <Alert size="small" variant="info" title=" This is a small alert." />
      <Alert size="default" variant="info" title="Default Alert" />
      <Alert size="large" variant="info" title="Large Alert" />
    </div>
  );
};

export default AlertDemo;
```

### Props

| Prop Name  | Type      | Default   | Description                                        |
| ---------- | --------- | --------- | -------------------------------------------------- |
| `variant`  | string    | `default` | Sets the style of the alert (success, error, etc.) |
| `size`     | string    | `default` | Sets the size of the alert (small, default, large) |
| `title`    | string    | -         | Sets the title of the alert                        |
| `children` | ReactNode | -         | The content/message of the alert                   |
