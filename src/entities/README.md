# `src/entities/` Directory

The `src/entities/` directory is dedicated to managing and organizing the core
data models and related API endpoints of your application. This directory
contains entities that represent key concepts or business objects, such as
users, products, or orders. It is structured in a way that allows for clear
separation of concerns and scalability.

## **Table of Contents:**

1. [Entity Structure](#entity-structure)
2. [Creating an Entity](#creating-an-entity)
3. [Folder Structure](#folder-structure)

## Entity Structure

An entity typically consists of the following structure:

- **API Folder (`api/`)**: Contains API calls, such as CRUD operations or other
  data-related logic.
- **Model Folder (`model/`)**: Contains the data model, such as TypeScript
  interfaces or classes that represent the entity.
- **Index File (`index.ts`)**: Exports the API and model logic so they can be
  used across the app.

## Creating an Entity

To create a new entity:

1. **Identify the Entity**: Determine the core object or business concept you
   want to model _(e.g., User, Product, etc.)_.

2. **Define the Model**: Create a new file in the `model/` directory to define
   the structure of the entity.

3. **Create API Logic**: Implement the necessary API calls in the `api/`
   directory to interact with the backend for that entity.

4. **Export the Entity**: Ensure the `index.ts` file exports the API and model
   so they can be used throughout the app.

### Example folder structure for a `User` entity:

```typescript
// src/entities/user/model/customer.ts
export interface Customer {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

```typescript
// src/entities/user/api/register.ts
import { Customer } from '../model/customer';

export const registerUser = async (userData: Customer) => {
  // API call to register a user
  const response = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

  return response.json();
};
```

```typescript
// src/entities/user/index.ts
export { registerUser } from './api/register';
export { Customer } from './model/customer';
```

Now, you can import and use the `registerUser` function or the `Customer` model
wherever needed in your application.

## Folder Structure

The folder structure for `src/entities/` looks like this:

```
src/
├── entities/                 # Core business models and APIs
│   ├── user/                 # User entity
│   │   ├── model/            # Data model for user
│   │   │   ├── customer.ts   # User model
│   │   ├── api/              # API logic for user
│   │   │   ├── register.ts   # Registration API call
│   │   ├── index.ts          # Exports user-related logic
```
