import { Button } from "#components";

const LightingIcon: React.ReactElement = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);

export default async function HomePage() {
  return (
    <main className="container">
      <h1 className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio dolore
        deserunt harum aperiam, voluptatibus officia accusamus incidunt
        molestias error pariatur laboriosam odio animi amet aliquam vero. Quia
        nostrum excepturi consequuntur.
      </h1>

      <Button
        theme="secondary"
        mode="rounded"
        size="md"
        leftIcon={LightingIcon}
        className="mt-4"
      >
        Click me
      </Button>
    </main>
  );
}
