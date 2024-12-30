# `src/shared/` Directory

The `src/shared/` directory contains common, reusable code and utilities that
are
used throughout the application. These utilities and components help avoid
duplication, improve maintainability, and promote reusability. The directory
includes shared assets, UI components, and utility functions that can be
accessed globally.

## **Table of Contents**

1. Shared Structure
2. Creating a Shared Component
3. Folder Structure

## Shared Structure

The src/shared/ directory can be broken down into the following subdirectories:

- **Assets (_assets/_)**: Contains global assets, such as CSS files, images, or
  fonts.

- **UI (`ui/`)**: Includes reusable UI components, such as buttons, forms,
  modals, etc.

- **Utils (`utils/`)**: Contains utility functions, such as date formatting,
  string manipulation, or class name handling.

## Creating a Shared Component

To create a new shared component:

1. **Identify the Component**: Determine if the component is reusable across
   multiple parts of the app.

2. **Create the Component**: Place it in the `ui/` directory.

3. **Export the Component**: Ensure the component is exported for easy use
   across the app.

4. **Add Styles**: If necessary, include styles in the `assets/` directory or
   directly within the component.

### **Example**: Button Component

Here’s how you would create a reusable button component:

```typescript jsx
// src/shared/ui/button/component.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

```typescript
// src/shared/ui/button/index.ts
export { Button } from './component';
```

Now, you can use the Button component anywhere in your app:

```typescript jsx
import { Button } from '@/shared/ui';

<Button label="Click Me" onClick={() => alert('Button clicked!')} />
```

## Folder Structure

The folder structure for `src/shared/` looks like this:

```
src/
├── shared/                 # Shared utilities, assets, and components
│   ├── assets/             # Global assets (e.g., CSS, images)
│   │   ├── css/            # Stylesheets (e.g., Tailwind)
│   │   │   ├── tailwind.css
│   ├── ui/                 # Reusable UI components
│   │   ├── button/         # Button component
│   │   │   ├── component.tsx
│   │   │   ├── index.ts
│   ├── utils/              # Utility functions
│   │   ├── cn.ts           # Helper function for classnames
│   │   ├── index.ts        # Utility exports
```
