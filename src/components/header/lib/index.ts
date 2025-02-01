import type { UIEventHandler } from "svelte/elements";

import { states } from "$components/header/store";
import { get } from "svelte/store";

export const PROPERTY_NAME = "--header-nav-width";

export const SPACE_SIZE = 16;
export const PADDING = SPACE_SIZE * 2;
export const GAP = SPACE_SIZE * 2;

export const handleScroll: UIEventHandler<Window> = () => {
  const $states = get(states);

  const isScrolled = window.scrollY > SPACE_SIZE;
  if ($states.scrolled && isScrolled)
    return;

  const header = document.querySelector("#base-header.header") as HTMLElement;
  header.style.setProperty(PROPERTY_NAME, isScrolled ? "500px" : "100%");

  states.update(prev => ({ ...prev, scrolled: isScrolled }));
};
