# `src/views/` Directory

The `src/views/` directory is responsible for managing the page components and
their associated configuration files. This directory organizes the UI components
and metadata settings for each page in the app, allowing for a clean and
scalable way to manage views, layout elements, and metadata for different
routes.

## **Table of Contents:**

1. [Page Components](#page-components)
2. [Page Metadata](#page-metadata)
3. [Folder Structure](#folder-structure)

## Page Components

Page components are responsible for rendering the main content of each route.
These components are usually stored under the `src/views/<route>/ui/` directory.

For example, the page component for the user dashboard might look like this:

```typescript jsx
// src/views/user/ui/dashboard-page.tsx
export const Page: React.FC = () => {
  return <main id="user-dashboard" />
}
```

## Page Metadata

Metadata files define the configuration for each page, such as the page title,
description, and viewport settings. Metadata is stored in a `config` folder
under
each page's corresponding route.

Here’s an example of metadata for the user dashboard page:

```typescript jsx
// src/views/user/config/metadata.ts
import type { Metadata } from 'next'

export const dashboardPageMetadata: Metadata = {
  title: 'Dashboard'
}

/**
 * For dynamic metadata generation:
 * export const dashboardPageMetadata = async (): Metadata => {
 *   return { title: 'Dynamic Page Title' };
 * }
 */
```

These metadata files are later imported in the corresponding route and passed
along to the page component.

## Combining Page and Metadata

Each page route, defined in `src/(routes)/<route>/page.tsx`, imports the
corresponding page component and metadata, then exports them for use in the
application.

```typescript jsx
// src/(routes)/user/dashboard/page.tsx
import { Page, dashboardPageMetadata } from '@/views/user'

export default Page
export { dashboardPageMetadata as metadata };
// For dynamic metadata generation: export { dashboardPageMetadata as generateMetadata };
```

This structure ensures that each route has its own page component and metadata,
making it easier to manage individual routes.

## Folder Structure

The folder structure is organized as follows:

```
src/
├── views/                    # Contains UI components and configurations for pages
│   ├── user/                 
│   │   ├── ui/               # UI components for user-related pages
│   │   │   ├── dashboard-page.tsx # Page component for user dashboard
│   │   ├── config/           # Metadata configuration files for user pages
│   │   │   ├── metadata.ts   # Metadata for the user dashboard
│   ├── about/                # Similar structure for about page
│   ├── blog/                 # Blog-related views
```

In this example, the user folder contains all the UI and config files related to
the user pages, such as dashboard-page.tsx and metadata.ts.
