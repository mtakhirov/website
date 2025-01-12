<h1 align="center">
  <samp>Website</samp>
</h1>

<p align="center">
  <samp>
    Personal website built using Next.js, TypeScript, and Tailwind CSS. <br />
    It showcases various information about me, my work, and my interests.
  </samp>
</p>

## Tech Stack

- **Frontend**: `Next.js`, `TypeScript`, `Tailwind CSS`
- **Linting** & Formatting: `ESLint`, `Prettier`
- **Localization**: `Next-Intl`

## Project Structure

```
locales/
public/
src/
├── app/           # Application routing and layout
│   ├── (routes)/  # Pages and dynamic routes
│   ├── layouts/   # Root and base layouts
├── entities/      # Business logic and API interactions
├── features/      # Application features (e.g., i18n)
├── shared/        # Reusable components, assets, and utilities
├── views/         # Page-specific components and configurations
├── widgets/       # UI components and hooks
.env.sample        # Environment variable template
next.config.ts     # Next.js configuration
package.json       # Dependencies and scripts
```

### Brief Explanation of the Project Structure

- **`src/app/`** - This contains the Next.js routes and page layouts. All your
  pages `(page.tsx)` are located here. [More info ↗](./src/app/README.md)

- **`src/entities/`** - Data models and API services for managing entities like
  users. [More info ↗](./src/entities/README.md)

- **`src/features/`** - Special features or services, such as localization
  `(i18n)`. [More info ↗](./src/features/README.md)

- **`src/shared/`** - Shared code: _UI components_, _helper functions_,
  _CSS_. [More info ↗](./src/shared/README.md)

- **`src/widgets/`** - Custom widgets, such as the header or
  footer. [More info ↗](./src/widgets/README.md)

- **`src/views/`** - Page-specific components and
  configurations. [More info ↗](./src/views/README.md)

## Getting Started

To run the project locally, follow these steps:

1. ### Clone this repository

```shell
git clone <repository-url>
```

2. ### Install dependencies using pnpm (recommended)

```shell
pnpm install
```

3. ### Run the development server

```shell
pnpm run dev
```

## License

This project is licensed under the [WTFPL](./LICENSE) (Do What the F\*ck You Want
to Public License).
