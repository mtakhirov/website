import { writable } from 'svelte/store'

export interface HeaderStates {
  scrolled: boolean
  mobileMenuOpen: boolean
}

export const states = writable<HeaderStates>({
  scrolled: false,
  mobileMenuOpen: false,
})

export interface RefElements {
  header: HTMLElement
  nav: HTMLElement
}

export const ref = writable<RefElements>()
