# `src/widgets/` Directory

The `src/widgets/` directory contains reusable, modular UI components known as
widgets. These components serve a specific purpose and are designed to be used
across different pages or layouts in the application. After developing
individual components (such as _buttons_, _headers_, or _language switchers_),
they
are combined and exported as a default widget in the `widget.tsx` file.

## **Table of Contents:**

1. [Widget Structure](#widget-structure)
2. [Creating a Widget](#creating-a-widget)
3. [Folder Structure](#folder-structure)

## Widget Structure

Each widget is typically organized into the following subdirectories:

1. **UI Components** (`ui/`): This folder contains the main component for the
   widget.

2. **Configuration** (`config/`): Optional folder for widget-specific
   configurations.

3. **Hooks** (`hook/`): Optional folder for custom hooks that handle widget
   logic, such as state management or event handling.

4. **Widget Entry** (`widget.tsx`): Combines all UI components and hooks into
   one cohesive widget, which is then exported as a default export.

Here’s a basic overview of how a widget is structured:

- **`ui/`** - Contains the small UI components _(e.g., buttons, language
  selectors)_.
- **`hook/`** - Stores any custom hooks that manage the widget’s logic _(e.g.,
  scroll behavior, state changes)_.
- **`widget.tsx`** - Combines everything and is the default export of the
  widget.

## Creating a Widget

Once the necessary UI components and hooks are created for the widget, they are
combined and exported in the `widget.tsx` file. The `widget.tsx` file must use a
default export.

Here’s how a widget is created:

- **Create the UI Components**: Write the necessary components under the `ui/`
  directory.
- **Create the Hooks**: If the widget requires any logic _(like handling scroll
  behavior)_, create custom hooks in the `hook/` directory.
- **Combine Components in `widget.tsx`**: In the `widget.tsx` file, import the
  components and hooks, and then return them within a single component.

For example:

```typescript jsx
// src/widgets/header/ui/language-switcher.tsx
export const LanguageSwitcher: React.FC = () => {
  return <div>Language Switcher Component</div>
}
```

```typescript jsx
// src/widgets/header/hook/use-header-scroll.tsx
import { useEffect, useState } from 'react'

export const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isScrolled }
}
```

Now, in the widget.tsx file, combine them:

```typescript jsx
// src/widgets/header/widget.tsx
import { LanguageSwitcher } from './ui/language-switcher'
import { useHeaderScroll } from './hook/use-header-scroll'

export default function Widget() {
  const { isScrolled } = useHeaderScroll();

  return (
    <header data-scrolled={isScrolled}>
      <nav className="container">
        <h1>Site Name</h1>
        <LanguageSwitcher />
      </nav>
    </header>
  )
}
```

## Folder Structure

The folder structure for `src/widgets/` looks like this:

```
src/
├── widgets/                   # Directory for reusable widget components
│   ├── header/                # Header widget
│   │   ├── ui/                # UI components for header
│   │   │   ├── header.tsx     # Main header component
│   │   │   ├── language-switcher.tsx # Language switcher component
│   │   ├── hook/              # Custom hooks for header functionality
│   │   │   ├── use-header-scroll.tsx # Hook for handling scroll behavior
│   │   ├── widget.tsx         # Main entry point for header widget
```