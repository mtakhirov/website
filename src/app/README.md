# `src/app` Directory

This directory contains the core application structure of the Next.js app,
including layout components and page configurations. The organization of this
section follows a modular approach for clear separation of concerns between
layouts, routes, and pages.

## **Table of Contents**

1. [Layouts](#layouts)
   - [Using Layouts in Pages](#using-layouts-in-pages)
2. [Pages](#pages)
   - [Page Component](#example-of-a-page-component)
   - [Page Metadata](#example-of-a-metadata-configuration)
   - [Combining Page and Metadata](#combining-page-and-metadata)
3. [Folder Structure](#folder-structure)

## **Layouts**

Layouts are located in the `src/app/layouts/` directory. Each layout component
wraps around a page component and can define a structure for that page, like
headers, footers, or sidebars. Layout components are exported and then used in
specific pages or routes.

Example of a layout component:

```tsx
// src/layouts/user-dashboard-layout.tsx
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <section id="user-dashboard">{children}</section>;
};
```

In this example, user-dashboard-layout.tsx defines a layout for a user
dashboard. The layout component accepts children as its prop to render any page
inside this layout.

### Using Layouts in Pages

In the corresponding route, we import the layout and export it as the default
layout for the page:

```tsx
// src/(routes)/user/dashboard/layout.tsx
import { Layout } from "@/app/layouts/user-dashboard-layout";
export default Layout;
```

This file links the layout to the user/dashboard route.

## **Pages**

Page metadata _(such as title, description, and viewport settings)_ is handled
in
configuration files within the `src/views/` directory.

### Example of a page component:

```tsx
// src/views/user/ui/user-dashboard-page.ts
export const Page: React.FC = () => {
  return <main id="user-dashboard" />;
};
```

### Example of a metadata configuration:

```typescript jsx
// src/views/user/config/metadata.ts
import type { Metadata } from "next";

export const dashboardPageMetadata: Metadata = {
  title: "Dashboard"
};

/**
 * For dynamic metadata generation:
 * export const dashboardPageMetadata = async (): Metadata => {
 *   return { title: 'Dynamic Page Title' };
 * }
 */
```

This file defines the metadata for the dashboard page. The metadata can either
be static or dynamically generated using async functions.

### Combining Page and Metadata

In the route definition (`src/(routes)/user/dashboard/page.tsx`), we import both
the page component and the metadata, then export them as the default page and
metadata for the route:

```typescript jsx
// src/(routes)/user/dashboard/page.tsx
import { dashboardPageMetadata, Page } from "@/views/user";

export default Page;
export { dashboardPageMetadata as metadata };
// For dynamic metadata: export { dashboardPageMetadata as generateMetadata };
```

## **Folder Structure**

The folder structure is as follows:

```
src/
├── app/
│   ├── (routes)/           # The main application routes
│   │   ├── user/
│   │   │   ├── dashboard/
│   │   │   │   ├── layout.tsx       # Layout for the user dashboard
│   │   │   │   ├── page.tsx         # Page component for the dashboard
│   ├── layouts/              # All layout components
│   │   ├── user-dashboard-layout.tsx # Layout for user dashboard
├── views/                # All UI and config files for pages
│   ├── user/
│   │   ├── ui/
│   │   │   ├── dashboard-page.tsx # Dashboard page component
│   │   ├── config/
│   │   │   ├── metadata.ts         # Page metadata configuration
```
