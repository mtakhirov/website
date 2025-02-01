<script lang="ts">
  import { Header } from "$components";
  import "$assets/styles/tailwind.css";

  const { children } = $props();
</script>

<Header />

<main class="container">
  {@render children()}
</main>
