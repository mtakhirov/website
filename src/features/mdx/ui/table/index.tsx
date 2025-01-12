import type React from "react";
import type { PropsWithChildren } from "react";

export const MdxTableComponent: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="font-bold" {...props}>
        {children}
      </table>
    </div>
  );
};
MdxTableComponent.displayName = "h1 component for mdx";
