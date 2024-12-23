"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

export const Root = SelectPrimitive.Root;
Root.displayName = SelectPrimitive.Root.displayName;

export const Group = SelectPrimitive.Group;
Group.displayName = SelectPrimitive.Group.displayName;

export const Value = SelectPrimitive.Value;
Value.displayName = SelectPrimitive.Value.displayName;

export { Content, Item, Trigger } from "#shared/ui/select/ui";
