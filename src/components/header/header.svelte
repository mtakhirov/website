<script lang="ts">
  import { onMount } from "svelte";
  import { handleScroll } from "./lib";
  import { ref, states } from "./store";

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
  class="group pointer-events-auto sticky top-4 z-50 container my-4 text-sm"
  bind:this={$ref.header}
>
  <nav
    class="
      mx-auto flex w-full items-center justify-between gap-4 rounded-full
      bg-black/60 py-1.5 backdrop-blur-xs transition-all duration-300

      group-data-[mobile-menu-open=true]:w-full
      group-data-[mobile-menu-open=true]:bg-black/0
      group-data-[mobile-menu-open=true]:px-2
      group-data-[mobile-menu-open=true]:md:px-3

      group-data-[scrolled=true]:px-2 group-data-[scrolled=true]:md:px-3

      md:w-[var(--header-nav-width)] md:py-2
    "
    bind:this={$ref.nav}
  >
    <div class="flex items-center gap-2">
      <a href="/" data-underline>
        <h3>~/tkhrv</h3>
      </a>

      <span
        class="
          hidden text-white/35 select-none

          md:inline-block
        ">#</span
      >

      <div
        class="
          hidden items-center gap-4

          md:flex
        "
      >
        {#each LINKS as link}
          <a itemid={link.href} href={link.href} aria-label={link.name}>
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  </nav>
</header>
