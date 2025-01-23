<script lang="ts">
  import { onMount } from "svelte";
  import { cn } from "$lib";
  import { handleScroll } from "./lib";
  import { states, ref } from "./store";

  const LINKS = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
  ];

  onMount(() => {
    handleScroll(undefined as never);
  });
</script>

<svelte:window on:scroll={handleScroll} />

<header
  id="base-header"
  data-scrolled={$states.scrolled}
  data-mobile-menu-open={$states.mobileMenuOpen}
  class="group header"
  bind:this={$ref.header}
>
  <nav class="nav" bind:this={$ref.nav}>
    <div class="flex items-center gap-2">
      <a href="/" data-underline>
        <h3>~/tkhrv</h3>
      </a>

      <span class="hidden select-none text-white/35 md:inline-block">#</span>

      <div class="hidden items-center gap-4 md:flex">
        {#each LINKS as link}
          <a href={link.href} aria-label={link.name}>
            {link.name}
          </a>
        {/each}
      </div>

      <span
        class="inline-block select-none text-white/35 opacity-0 transition-opacity group-data-[mobile-menu-open=true]:opacity-0 group-data-[scrolled=true]:md:opacity-100"
      >
        /
      </span>
    </div>
  </nav>
</header>

<style>
  @import "tailwindcss/theme" reference;

  .header {
    @apply container mx-auto pointer-events-auto sticky top-4 z-50 my-4;
  }

  .nav {
    @apply mx-auto flex w-full items-center justify-between gap-4 rounded-full bg-black/60 py-1.5 duration-300 md:py-2;
    @apply w-full backdrop-blur-sm transition-all group-data-[scrolled=true]:px-2 md:w-[var(--header-nav-width)] group-data-[scrolled=true]:md:px-3;
    @apply group-data-[mobile-menu-open=true]:w-full group-data-[mobile-menu-open=true]:bg-black/0 group-data-[mobile-menu-open=true]:px-2 group-data-[mobile-menu-open=true]:md:px-3;
  }
</style>
