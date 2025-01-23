<script lang="ts">
  import { Header } from "$components";

  import "../tailwind.css";

  let { children } = $props();
</script>

<Header />

<main class="container">
  {@render children()}
</main>
