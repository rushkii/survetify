<script lang="ts">
  import { i18n } from '$lib';
  import { ParaglideJS } from '@inlang/paraglide-sveltekit';
  import '../app.css';

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <main class="flex min-h-screen w-full items-center justify-center">
    {@render children()}
  </main>
</ParaglideJS>
