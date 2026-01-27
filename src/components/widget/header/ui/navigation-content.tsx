import { cn } from "~/utils";

type NavigationContentProps = {
  id: string;
} & React.ComponentProps<"div">;

function NavigationContent({ id, children, className, ...props }: NavigationContentProps) {
  return (
    <div
      id={id}
      className={cn([
        `flex items-center rounded-full outline-none`,
        `border border-border bg-accent/40`,
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
}

export default NavigationContent;
export { NavigationContent };
