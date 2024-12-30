# `src/features/` Directory

The `src/features/` directory contains specific, domain-related functionalities
that are used throughout the application. These features encapsulate particular
logic or functionality, such as internationalization _(i18n)_, authentication,
and
other domain-specific modules. Each feature is organized into its own folder and
provides reusable modules that can be easily imported and utilized across
different parts of the application.

## **Table of Contents:**

1. Feature Structure
2. Creating a Feature
3. Feature Example: i18n
4. Folder Structure

## Feature Structure

Each feature within the `src/features/` directory follows a simple and organized
structure. Typically, a feature may consist of:

- **Config (`config/`)**: Contains configuration files related to the feature,
  such as
  initialization or setup files.

- **Helpers (`helper/`)**: Contains utility functions or helpers specific to the
  feature.

- **Plugin (`plugin/`)**: Optionally, contains integration code or
  initialization code
  that is used to initialize the feature across the app.

- **Main File (`index.ts`)**: The entry point that exports the necessary
  functions or
  modules for that feature.

## Creating a Feature

To create a new feature:

1. **Identify the Domain**: Determine the feature's purpose, whether it’s
   related to authentication, i18n, logging, etc.

2. **Structure the Feature:**
   - Create subdirectories like `config/`, `helper/`, and `plugin/` for the
     feature.
   - Add configuration files, helper functions, and optional plugin code.

3. **Export Modules**: In the `index.ts` file, export the modules that will be
   used throughout the app.

Example: If you were creating a feature for internationalization _(i18n)_, you
might have a feature structure like this:

```typescript
// src/features/i18n/config/locale.ts

export const defaultLocale = 'en';
export const availableLocales = ['en', 'es', 'fr'];
```

```typescript
// src/features/i18n/helper/get-locale.ts
export const getLocale = () => {
  return localStorage.getItem('locale') || 'en';
};
```

```typescript
// src/features/i18n/plugin/init.ts
import { getLocale } from '../helper/get-locale';
import { defaultLocale } from '../config/locale';

export default function initI18n() {
  const locale = getLocale();
  console.log(`Initializing i18n with locale: ${locale || defaultLocale}`);
};
```

```typescript
// src/features/i18n/index.ts
export { initI18n } from './plugin/init';
export { getLocale } from './helper/get-locale';
```

Now, you can import and use the getLocale helper wherever needed in your
application.

## Folder Structure

The folder structure for `src/features/` looks like this:

```
src/
├── features/                 # Directory for domain-specific features
│   ├── i18n/                 # i18n feature
│   │   ├── config/           # Configuration related to i18n
│   │   │   ├── locale.ts     # Default locale and available languages
│   │   ├── helper/           # Helper functions related to i18n
│   │   │   ├── get-locale.ts # Function to get the current locale
│   │   ├── plugin/           # Optional plugin logic for initializing i18n
│   │   │   ├── init.ts       # Initialize i18n system
│   │   ├── index.ts          # Main entry point for i18n feature
│   ├── auth/                 # Authentication feature
│   │   ├── config/           # Authentication configuration
│   │   ├── helper/           # Helper functions for auth
│   │   ├── plugin/           # Plugin logic for auth
│   │   ├── index.ts          # Main entry point for auth feature
```
