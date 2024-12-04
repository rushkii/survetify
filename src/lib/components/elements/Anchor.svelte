<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type Props = ComponentProps<Snippet> & HTMLAnchorAttributes;

  let { children, ...rest }: Props = $props();
</script>

<a {...rest} data-sveltekit-preload-data="tap">
  {@render children?.()}
</a>
